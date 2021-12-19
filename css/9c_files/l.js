$(function () {
    $('#newbutton').on('click',function(){
        $(this).addClass('select')
        $('#recombutton').removeClass('select')
        $('#new').show()
        $('#recom').hide()
    })
    $('#recombutton').on('click',function(){
        $(this).addClass('select')
        $('#newbutton').removeClass('select')
        $('#recom').show()
        $('#new').hide()
    })
    if (document.cookie.match(new RegExp('(^| )PCA=([^;]*)(;|$)'))) {
        $('.cover,.weclcome_alert').hide();
    } else {
        $('.cover,.weclcome_alert').show();
        var exp = new Date(); //获得当前时间
        exp.setTime(exp.getTime() + 4 * 60 * 60 * 1000); //换成毫秒
        document.cookie = 'PCA=exist;expires=' + exp.toGMTString();
        console.log(exp);
    }
    $('#webUrl').val(window.location.hostname);
    $('#copyUrl').on('click', function () {
        $('#webUrl')[0].select();
        document.execCommand('Copy');
        alert('复制成功');
    });
    $('.alert_close').click(function() {
        $('.cover').css('display', 'none')
        $('.weclcome_alert').css('display', 'none')
    })
    var date = new Date()
    var year = date.getFullYear() //年
    var month = date.getMonth()+1 //月
    var day = date.getDate() //日
    var myday = date.getDay() //星期几
    var week
    switch(myday) {
        case 0:week="星期日";break;
        case 1:week="星期一";break;
        case 2:week="星期二";break;
        case 3:week="星期三";break;
        case 4:week="星期四";break;
        case 5:week="星期五";break;
        case 6:week="星期六";break;
        default:week="系统错误！"
    }
    $('.year').html(`<span>${year}年节日表</span>`)
    $('.today').html(`今天：${year}年${month}月${day}日<span>${week}</span>`)
    $('.broadroll').rollCaster();
    var monthArr = ['12','11','10','9','8','7','6','5','4','3','2','1']
    for (var i = 0; i < monthArr.length; i++) {
        $('.month').append(`<li><a href="?m=${monthArr[i]}"><b></b><i></i><span>${monthArr[i]}月</span></a></li>`)
    }
    var monthli = $('.month').find('li')
    var semonth = window.location.href.split("m=")[1]
    if(semonth){
        monthli.selector.reverse()[semonth-1].className = 'current'
    }else{
        monthli.selector.reverse()[month-1].className = 'current'
    }
    monthli.click(function(){
        $(this).addClass('current')
        $(this).siblings().removeClass('current')
    })
})