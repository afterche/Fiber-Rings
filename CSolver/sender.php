<html>
<head>
<title>Transfer page</title>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
</head>
 
<body>
<?php
$rowanswer = $_POST['rowanswer']; // собираем введенные данные и записываемв переменные
$filename = $_POST['filename'];
$verify = $_POST['verify'];
$exit = $_POST['exit'];
$copypaste = $_POST['copypaste'];
//Capcha tipe
$ct3x3 = $_POST['ct3x3']; 
$ct3x3b = $_POST['ct3x3b'];
$ct2x4 = $_POST['ct2x4'];
$ct4x4 = $_POST['ct4x4'];
if (is_array($rowanswer)){//если это массив (использованы чекбоксы)
	foreach ($rowanswer as $value) {//переберем массив
		if (isset($value)) {//если элемент установлен добавим его 
			$answer .= $value;
		}
	}
} 
else{
	$answer .= "$rowanswer";
}
//Тип капчи добавим в начало ответа
if (isset($ct3x3)) {//если элемент установлен добавим его в начало
			$answer =$ct3x3.$answer;
}
if (isset($ct3x3b)) {//если элемент установлен добавим его в начало
			$answer =$ct3x3b.$answer;
}
if (isset($ct2x4)) {//если элемент установлен добавим его в начало
			$answer =$ct2x4.$answer;
}
if (isset($ct4x4)) {//если элемент установлен добавим его в начало
			$answer =$ct4x4.$answer;
}

if (isset($verify)) {//если элемент установлен добавим его 
			$answer .= $verify;
}
if (isset($exit)) {//если элемент установлен добавим его 
			$answer .= $exit;
}
if (isset($copypaste)) {//если элемент установлен добавим его 
			$answer .= $copypaste;
}

$text .= "$answer"; 
echo $text;
$saveanswerto .="answer/";
$saveanswerto .= "$filename"; 
$saveanswerto .= ".aw"; 
$deletecaptchafile .="captcha/";
$deletecaptchafile .= "$filename";
$deletecaptchafile .= ".png";
if (!empty($answer)) {//если все переменные имеют значения выполняем запись в файл
    $file = fopen ($saveanswerto, "w"); //открываем для перезаписи файл 
	fwrite ($file,$text); // пишем в файл
	fclose ($file); // закрываем файл
}
unlink ( $deletecaptchafile );// Delete captcha file
	
 //Remove old files
$expire_time = 300; // Время через которое файл считается устаревшим (в сек.)
$time_sec=time();// текущее время

$dir = 'answer/'; // From what directori delete
$files = scandir($dir); // Берём всё содержимое директории
for ($i = 0; $i < count($files); $i++) { // Перебираем все файлы
	if (($files[$i] != ".") && ($files[$i] != "..")) { // Текущий каталог и родительский пропускаем
		$path = $dir.$files[$i];
		$time_file=filemtime($path);// время изменения файла
		$time=$time_sec-$time_file;
		if ($time>$expire_time){
			unlink ( $path );
		}	
	}	
} 

$dir = 'captcha/'; // From what directori delete
$files = scandir($dir); // Берём всё содержимое директории
for ($i = 0; $i < count($files); $i++) { // Перебираем все файлы
	if (($files[$i] != ".") && ($files[$i] != "..")) { // Текущий каталог и родительский пропускаем
		$path = $dir.$files[$i];
		$time_file=filemtime($path);// время изменения файла
		$time=$time_sec-$time_file;
		if ($time>$expire_time){
			unlink ( $path );
		}	
	} 	
} 
header("Location:index.php");
?>
<P>OK</P> 
<P>       </P> 
<P>       </P> 
<P>       </P> 
<P>       </P> 
<form action="index.php">
    <button type="submit" autofocus>Choose captcha</button>
</form> 
</body>
</html>




