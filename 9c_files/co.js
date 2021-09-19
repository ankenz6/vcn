				$(document).ready(function() {
				var date = new Date();
				date.setTime(date.getTime()+24*60*60*1); //1天
				var COOKIE_NAME = "showbox";
				if($.cookie(COOKIE_NAME)) {
					$(".advbox").hide();
				} else {
					$(".advbox").show();
                    $(".advbox").animate({top:"50%"},1000);
					$(".closebtn").click(function() {
					$(".advbox").fadeOut(500);
				})
				$.cookie(COOKIE_NAME, 'ishide', {
                 expires: date
             }); //expires过期时间（单位为天！）
          }
        })