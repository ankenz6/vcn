function add_chat(){
var content=$('#chat_content').val();
if (content=="")
{
parent.layer.msg('不能发布空白信息！');
document.getElementById('chat_content').focus();
return false;
}
var interval=getCookie("interval");
if (interval){
parent.layer.msg('发送太快，请稍后重试！');
return false;
}
$.get("/plus/chat_content.php", { "content": content,"act":"add_save"},
			function (data)
			 {			
				if (data=='ok')
				{
				parent.layer.msg('发送成功！');
				document.getElementById("chat_content").value="";
				document.getElementById('chat_content').focus();
				chatClick();
				}else if(data=='jy')
				{
				parent.layer.msg('你被禁言了，请联系管理！');
				document.getElementById('chat_content').focus();
				return false;
				}
				else
				{
				parent.layer.msg('发送太快，请等候'+data+'秒后重试！');
				return false;
				}
			 })
}

$(document).ready(function()
{

var chatck = getCookie("chatck");
var unique = getCookie("unique");
if (chatck == '1') 
{
$('#dialogue').hide();
$('#apply_chat').show();
setCookie("chatck", "1", 120 * 60 * 1000);
}else{
$('#apply_chat').hide();
$('#dialogue').show();
setCookie("chatck", "0", 120 * 60 * 1000);
}
if (unique=='' || unique==null || unique=='undefined')
{
setCookie("unique", "1", 120 * 60 * 1000);
document.getElementById("position").value="1";
}else{
var grow=parseInt(unique)+1;
setCookie("unique", grow, 120 * 60 * 1000);
document.getElementById("position").value=grow;
}
chatClick();
});

function chatck(t)
{
if (t == '1') 
{
$('#dialogue').hide();
$('#apply_chat').show();
setCookie("chatck", t, 120 * 60 * 1000);
}else if(t == '0'){
$('#apply_chat').hide();
$('#dialogue').show();
setCookie("chatck", t, 120 * 60 * 1000);
}
chatClick();
}
            function chatClick() {
                var array = new Array();
                var res = getCookie("chat");
				var seat = getCookie("unique");
				var current = document.getElementById("position").value;
				if (seat!=='' && seat==current)
				{
				$.get("/plus/ajax_chat.php",function(data){
               if(data){
			   var arr = data.split("|");
               var name=arr[0];
			   var content=arr[1];
			   var uid=arr[2];
			   var chatid=arr[3];
			  var chatJson = {"name": name, "content": content};
                if (res != '') {
                    var index = -1;
                    array = jQuery.parseJSON(res);
                }
                array.push(chatJson);
                // 最多显示4条记录
                if (array.length > 10) {
                    array.splice(0,array.length - 10);
                }
                setCookie("chat", JSON.stringify(array), 120 * 60 * 1000); // 有效期为120分钟
				setCookie("chatid", chatid, 120 * 60 * 1000);
                }
				});
				}else{
				window.opener=null;
				window.open("","_self");
				window.close();
                return false;
				}
			findCookie();
            }

            /**
             * 创建和存储cookie
             * @param {Object} name 名称
             * @param {Object} value 值
             * @param {Object} expiredays 有效时间，单位：毫秒
             */
            function setCookie(name, value, expiredays) {
                var exDate = new Date();
                // 设置有效时间
                exDate.setTime(exDate.getTime() + expiredays);
                if(expiredays == null) {
                    document.cookie = name + "=" + escape(value)+ ";path=/";
                } else {
                    document.cookie = name + "=" + escape(value) + ";expires=" + exDate.toGMTString()+ ";path=/";
                }
            }

            /**
             * 获取cookie中的值
             * @param {Object} name
             */
            function getCookie(name) {
                if(document.cookie.length > 0) {
                    var start = document.cookie.indexOf(name + "=");
                    if(start != -1) {
                        start = document.cookie.indexOf("=", start) + 1;
                        var end = document.cookie.indexOf(';', start);
                        if(end == -1) end = document.cookie.length;
                        return unescape(document.cookie.substring(start, end));
                    }
                }

                return "";
            }

            function findCookie() {
                var res = getCookie("chat");
                var chatck = getCookie("chatck");
				var chatJson = eval(res);
				var i=0;
				var content="";
				if (chatck=='0')
				{
                console.log(res);
                if (res != "") {
                    var chatJson = jQuery.parseJSON(res);
                    $.each(chatJson, function(k, v) {
						content="<li><font color=\"#FFFF00\">"+v.name+"</font>："+v.content+"</li>";
                    });
                }else{
				    content="<li><font color=\"#FFFF00\">系统提醒</font>: 欢迎进入聊天系统，请文明发言。</li>";	
				}
				$("#dope").html(content);
				}else{
                console.log(res);
                if (res != "") {
				for(var i in chatJson){	
				content+="<li><font color=\"#FFFF00\">"+chatJson[i]['name']+"</font>："+chatJson[i]['content']+"</li>\r\n";
                }
				}else{
				content="<li><font color=\"#FFFF00\">系统提醒</font>: 欢迎进入聊天系统，请文明发言。</li>";	
				}
				$("#chat_nr").html(content);
				document.getElementById("chat_nr").scrollTop = document.getElementById("chat_nr").scrollHeight;				
				}
            }
window.setInterval(chatClick, 5000);