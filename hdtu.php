<?php 

//$url = 'http://www.pipizn.xyz'.$_GET["tu"];
//$url = 'https://znboxcdn402.com'.$_GET["tu"];
//$url = 'http://www.znboxcdn109.com'.$_GET['tu'];
$url = 'http://www.av6969.space'.$_GET["tu"];
//45.115.230.76 64.78.174.144 64.78.174.145 64.78.174.146 https://znboxcdn402.com http://www.av9936h.xyz/

$dir = pathinfo($url);
 
$host = $dir['dirname'];
 
$refer = $host.'/';
 
$ch = curl_init($url);

curl_setopt ($ch, CURLOPT_REFERER, $refer);
 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);//Activation can modify the page
 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
 
curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);

curl_setopt($ch, CURLOPT_PROXYAUTH, CURLAUTH_BASIC); //代理认证模式  

curl_setopt($ch, CURLOPT_PROXY, $arrip[0]); //代理服务器地址   

curl_setopt($ch, CURLOPT_PROXYPORT,$arrip[1]); //代理服务器端口

$data = curl_exec($ch);	

curl_close($ch);

header("Content-type: image/jpeg");

print( $data );

?>