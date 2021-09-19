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
        var exp = new Date(); //��õ�ǰʱ��
        exp.setTime(exp.getTime() + 4 * 60 * 60 * 1000); //���ɺ���
        document.cookie = 'PCA=exist;expires=' + exp.toGMTString();
        console.log(exp);
    }
    $('#webUrl').val(window.location.hostname);
    $('#copyUrl').on('click', function () {
        $('#webUrl')[0].select();
        document.execCommand('Copy');
        alert('���Ƴɹ�');
    });
    $('.alert_close').click(function() {
        $('.cover').css('display', 'none')
        $('.weclcome_alert').css('display', 'none')
    })
    var date = new Date()
    var year = date.getFullYear() //��
    var month = date.getMonth()+1 //��
    var day = date.getDate() //��
    var myday = date.getDay() //���ڼ�
    var week
    switch(myday) {
        case 0:week="������";break;
        case 1:week="����һ";break;
        case 2:week="���ڶ�";break;
        case 3:week="������";break;
        case 4:week="������";break;
        case 5:week="������";break;
        case 6:week="������";break;
        default:week="ϵͳ����"
    }
    $('.year').html(`<span>${year}����ձ�</span>`)
    $('.today').html(`���죺${year}��${month}��${day}��<span>${week}</span>`)
    $('.broadroll').rollCaster();
    var monthArr = ['12','11','10','9','8','7','6','5','4','3','2','1']
    for (var i = 0; i < monthArr.length; i++) {
        $('.month').append(`<li><a href="?m=${monthArr[i]}"><b></b><i></i><span>${monthArr[i]}��</span></a></li>`)
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