function add_chat(){
var content=$('#chat_content').val();
if (content=="")
{
parent.layer.msg('���ܷ����հ���Ϣ��');
document.getElementById('chat_content').focus();
return false;
}
var interval=getCookie("interval");
if (interval){
parent.layer.msg('����̫�죬���Ժ����ԣ�');
return false;
}
$.get("/plus/chat_content.php", { "content": content,"act":"add_save"},
			function (data)
			 {			
				if (data=='ok')
				{
				parent.layer.msg('���ͳɹ���');
				document.getElementById("chat_content").value="";
				document.getElementById('chat_content').focus();
				chatClick();
				}else if(data=='jy')
				{
				parent.layer.msg('�㱻�����ˣ�����ϵ����');
				document.getElementById('chat_content').focus();
				return false;
				}
				else
				{
				parent.layer.msg('����̫�죬��Ⱥ�'+data+'������ԣ�');
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
                // �����ʾ4����¼
                if (array.length > 10) {
                    array.splice(0,array.length - 10);
                }
                setCookie("chat", JSON.stringify(array), 120 * 60 * 1000); // ��Ч��Ϊ120����
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
             * �����ʹ洢cookie
             * @param {Object} name ����
             * @param {Object} value ֵ
             * @param {Object} expiredays ��Чʱ�䣬��λ������
             */
            function setCookie(name, value, expiredays) {
                var exDate = new Date();
                // ������Чʱ��
                exDate.setTime(exDate.getTime() + expiredays);
                if(expiredays == null) {
                    document.cookie = name + "=" + escape(value)+ ";path=/";
                } else {
                    document.cookie = name + "=" + escape(value) + ";expires=" + exDate.toGMTString()+ ";path=/";
                }
            }

            /**
             * ��ȡcookie�е�ֵ
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
						content="<li><font color=\"#FFFF00\">"+v.name+"</font>��"+v.content+"</li>";
                    });
                }else{
				    content="<li><font color=\"#FFFF00\">ϵͳ����</font>: ��ӭ��������ϵͳ�����������ԡ�</li>";	
				}
				$("#dope").html(content);
				}else{
                console.log(res);
                if (res != "") {
				for(var i in chatJson){	
				content+="<li><font color=\"#FFFF00\">"+chatJson[i]['name']+"</font>��"+chatJson[i]['content']+"</li>\r\n";
                }
				}else{
				content="<li><font color=\"#FFFF00\">ϵͳ����</font>: ��ӭ��������ϵͳ�����������ԡ�</li>";	
				}
				$("#chat_nr").html(content);
				document.getElementById("chat_nr").scrollTop = document.getElementById("chat_nr").scrollHeight;				
				}
            }
window.setInterval(chatClick, 5000);