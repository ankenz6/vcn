<?php 
header("Content-type: image/jpeg");
$url = 'http://img.jav101.com/'.$_GET["id"];
$dir = pathinfo($url);
$host = $dir['dirname'];
$refer = $host.'/';
$pic_html = get_url($url);
$AccessDenied = str_substr('<Code>','</Code>',$pic_html);
if (!empty($AccessDenied)) {
    $pic_id = str_substr('tv_adult/','.',$url);
    $pic_tu = get_url('http://img.jav101.com/data/short-videos/'.$pic_id.'/thumb/'.$pic_id.'.jpg');
    echo $pic_tu;
}else{
    echo $pic_html;
}
//获取地址
function get_url($url,$post='',$head='') {
    $ch = @curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_REFERER, $refer);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);//Activation can modify the page
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 120);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); // https请求 不验证证书和hosts
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
    curl_setopt($ch, CURLOPT_ENCODING, "");
    if(!empty($post)){
       curl_setopt($ch, CURLOPT_POST, 1);
       curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
    }
    $content = @curl_exec($ch);
    curl_close($ch);
    return $content;
}
//截取字符
function str_substr($start, $end, $str){
    $temp = explode($start, $str, 2);
    $content = explode($end, $temp[1], 2);
    return $content[0];
}
?>