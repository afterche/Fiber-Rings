<html>
<head>
<title>Get captcha</title>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
<meta http-equiv="Refresh" content="30" />
Refresh time 30c<br>
--------------------<br>
<b>ZTech</b><br>
<b>GFC project</b><br>
<b>ztech@uk.pl</b><br>
--------------------<br>
Operator Name:<br>
Operator Status:<br>
Plan value:<br>
Curent value:<br> 

 <style type="text/css">
   html, body{
/*background-color:#B9B9B9;*/
text-align:left;
font-family:Verdana, Arial, Helvetica, sans-serif;
font-size:90%;
color:#234;
} 

a:link, a:visited {
color:#455;
text-decoration:none;
font:80% Verdana, Arial, Helvetica, sans-serif;
font-weight:bold;
background-color:inherit;
}
a:hover, a:active{
text-decoration:underline;
color:#9AA;
font-weight:bold;
background-color:inherit;
}
  </style>
--------------------<br>
<a href=http://stat.xp3.biz/> stat.xp3.biz - Stat and contol</a><br>
<a href=http://50satoshi.eu5.org/> 50satoshi.eu5.org - Main Domain</a><br>
<a href=http://pigrowant.xp3.biz/> pigrowant.xp3.biz - Tests and Demo</a><br>
--------------------<br>

</head>

<body>
<?php
	 //Remove old capcha files
	$expire_time = 140; // ����� ����� ������� ���� ��������� ���������� (� ���.)
	$time_sec=time();// ������� �����
	$dir = 'captcha/'; // From what directori delete
	$files = scandir($dir); // ���� �� ���������� ����������
	for ($i = 0; $i < count($files); $i++) { // ���������� ��� �����
		if (($files[$i] != ".") && ($files[$i] != "..")) { // ������� ������� � ������������ ����������
			$path = $dir.$files[$i];
			$time_file=filemtime($path);// ����� ��������� �����
			$time=$time_sec-$time_file;
			if ($time>$expire_time){
				unlink ( $path );
			}	
		}	
	}  

	$dir = 'captcha/'; // ����� � �������������
	$files = scandir($dir); // ���� �� ���������� ����������
	echo "<table border=1 align='center' cellpadding=15>"; // �������� �������
	for ($i = 0; $i < count($files); $i++) { // ���������� ��� �����
		if (($files[$i] != ".") && ($files[$i] != "..")) { // ������� ������� � ������������ ����������
			echo "<tr>"; // ��������� ����� ������
							
				echo "<td>"; // �������� �������
				$path = $dir.$files[$i]; // �������� ���� � ��������
				$filename = basename($path,".png");
				echo "<img src='$path'/>"; // �����  ��������
				echo "</td>"; // ��������� �������
								
				echo "<td align='right'>"; // �������� �������
				$captchatipe=substr($filename, 0, 3);//������� ������ 3 ������� � �������� �����
				if (strcasecmp($captchatipe, "nin") == 0) {
					nine_chekbox();// � ����������� �� ���� ����� ��������� ������������� �������
				}
				elseif (strcasecmp($captchatipe, "lin") == 0){
					line_answer();
				} 
				else {
					line_answer();
				}
				echo "</td>"; // ��������� �������
			echo "</tr>";// Close ������
		}
	}
	echo "</table>"; // ��������� �������
	
function nine_chekbox (){ 
	global $filename;
	echo "<form action='sender.php' method='post'>";
		echo "<table align='center'>"; // �������� �������
			echo "<tr>"; // ��������� ����� ������
				echo "<td bgcolor='#fa8e47'>"; // �������� �������
				echo "<p>";
				echo "<input name='ct3x3' type='checkbox' value='M'>3x3";//Capcha tipe
				echo "</p>";
				echo "</td>"; // ��������� �������
								
				echo "<td bgcolor='#fa8e47'>"; // �������� �������
				echo "<p>";
				echo "<input name='ct3x3b' type='checkbox' value='N'>3x3b";//Capcha tipe
				echo "</p>";
				echo "</td>"; // ��������� �������
								
				echo "<td bgcolor='#fa8e47'>"; // �������� �������
				echo "<p>";
				echo "<input name='ct2x4' type='checkbox' value='B'>2x4";//Capcha tipe
				echo "</p>";
				echo "</td>"; // ��������� �������
				
				echo "<td bgcolor='#fa8e47'>"; // �������� �������
				echo "<p>";
				echo "<input name='ct4x4' type='checkbox' value='V'>4x4";//Capcha tipe
				echo "</p>";
				echo "</td>"; // ��������� �������
			echo "</tr>";// Close ������
			
			echo "<tr>"; // ��������� ����� ������
				echo "<td high='170'>"; // �������� �������	
				echo "<p>";
				echo "</p>";
				echo "</td>"; // ��������� �������
			echo "</tr>";// Close ������
			
			echo "<tr>"; // ��������� ����� ������
				echo "<td>"; // �������� �������
				echo "<p>";
				echo "<input name='rowanswer[1]' type='checkbox' value='1'>";
				echo "</p>";
				echo "</td>"; // ��������� �������
								
				echo "<td>"; // �������� �������
				echo "<p>";
				echo "<input name='rowanswer[2]' type='checkbox' value='2'>";
				echo "</p>";
				echo "</td>"; // ��������� �������
								
				echo "<td>"; // �������� �������
				echo "<p>";
				echo "<input name='rowanswer[3]' type='checkbox' value='3'>";
				echo "</p>";
				echo "</td>"; // ��������� �������
				
				echo "<td>"; // �������� �������
				echo "<p>";
				echo "<input name='rowanswer[10]' type='checkbox' value='Q'>";
				echo "</p>";
				echo "</td>"; // ��������� �������
			echo "</tr>";// Close ������
							
			echo "<tr>"; // ��������� ����� ������
				echo "<td>"; // �������� �������
				echo "<p>";
				echo "<input name='rowanswer[4]' type='checkbox' value='4'>";
				echo "</p>";
				echo "</td>"; // ��������� �������
							
				echo "<td>"; // �������� �������
				echo "<p>";
				echo "<input name='rowanswer[5]' type='checkbox' value='5'>";
				echo "</p>";
				echo "</td>"; // ��������� �������
								
				echo "<td>"; // �������� �������
				echo "<p>";
				echo "<input name='rowanswer[6]' type='checkbox' value='6'>";
				echo "</p>";
				echo "</td>"; // ��������� �������
				
				echo "<td>"; // �������� �������
				echo "<p>";
				echo "<input name='rowanswer[11]' type='checkbox' value='W'>";
				echo "</p>";
				echo "</td>"; // ��������� �������
			echo "</tr>";// Close ������

			echo "<tr>"; // ��������� ����� ������
				echo "<td>"; // �������� �������
				echo "<p>";
				echo "<input name='rowanswer[7]' type='checkbox' value='7'>";
				echo "</p>";
				echo "</td>"; // ��������� �������
								
				echo "<td>"; // �������� �������
				echo "<p>";
				echo "<input name='rowanswer[8]' type='checkbox' value='8'>";
				echo "</p>";
				echo "</td>"; // ��������� �������
								
				echo "<td>"; // �������� �������
				echo "<p>";
				echo "<input name='rowanswer[9]' type='checkbox' value='9'>";
				echo "</p>";
				echo "</td>"; // ��������� �������
				
				echo "<td>"; // �������� �������
				echo "<p>";
				echo "<input name='rowanswer[12]' type='checkbox' value='E'>";
				echo "</p>";
				echo "</td>"; // ��������� �������
			echo "</tr>";// Close ������
			
			echo "<tr>"; // ��������� ����� ������
				echo "<td>"; // �������� �������
				echo "<p>";
				echo "<input name='rowanswer[13]' type='checkbox' value='R'>";
				echo "</p>";
				echo "</td>"; // ��������� �������
								
				echo "<td>"; // �������� �������
				echo "<p>";
				echo "<input name='rowanswer[14]' type='checkbox' value='T'>";
				echo "</p>";
				echo "</td>"; // ��������� �������
								
				echo "<td>"; // �������� �������
				echo "<p>";
				echo "<input name='rowanswer[15]' type='checkbox' value='Y'>";
				echo "</p>";
				echo "</td>"; // ��������� �������
				
				echo "<td>"; // �������� �������
				echo "<p>";
				echo "<input name='rowanswer[16]' type='checkbox' value='U'>";
				echo "</p>";
				echo "</td>"; // ��������� �������
			echo "</tr>";// Close ������
			
			echo "<tr>"; // ��������� ����� ������
				echo "<td high='170'>"; // �������� �������	
				echo "<p>";
				echo "</p>";
				echo "</td>"; // ��������� �������
			echo "</tr>";// Close ������
			
			echo "<tr>"; // ��������� ����� ������
				echo "<td>"; // �������� �������
				echo "</td>"; // ��������� �������
								
				echo "<td>"; // �������� �������
				echo "</td>"; // ��������� �������
				
				echo "<td>"; // �������� �������
				echo "</td>"; // ��������� �������
								
				echo "<td>"; // �������� �������
				echo "<p>";
				echo "<input name='verify' type='checkbox' value='^'>Verify";
				echo "</p>";
				echo "</td>"; // ��������� �������
			echo "</tr>";// Close ������
			
			echo "<tr>"; // ��������� ����� ������
				echo "<td>"; // �������� �������
				echo "</td>"; // ��������� �������
								
				echo "<td>"; // �������� �������
				echo "</td>"; // ��������� �������
				
				echo "<td>"; // �������� �������
				echo "</td>"; // ��������� �������
								
				echo "<td>"; // �������� �������
				echo "<p>";
				echo "<input name='copypaste' type='checkbox' value='<'>CopyPaste";
				echo "</p>";
				echo "</td>"; // ��������� �������
			echo "</tr>";// Close ������
			
			echo "<tr>"; // ��������� ����� ������
				echo "<td>"; // �������� �������
				echo "</td>"; // ��������� �������
								
				echo "<td>"; // �������� �������
				echo "</td>"; // ��������� �������
				
				echo "<td>"; // �������� �������
				echo "</td>"; // ��������� �������
								
				echo "<td>"; // �������� �������
				echo "<p>";
				echo "<input name='exit' type='checkbox' value='>'>Exit";
				echo "</p>";
				echo "</td>"; // ��������� �������
			echo "</tr>";// Close ������
		echo "</table>"; // ��������� �������
		echo "<input name='filename' type='hidden' value='$filename'>";
		echo "<p>";
		echo "<label>";
		echo "<input type='submit' name='submit' id='submit' value='Send'>";
		echo "</label>";
		echo "</p>";
	echo "</form>";
}

function line_answer(){
	global $filename;
	global $i;
		echo "<form action='sender.php' method='post'>";
		echo "<p>Enter answer";
		if ($i==2){
			echo $i;
			echo "<input  name='rowanswer' type='text' class='lnews_data' size='30' autofocus>";// first line is active - autofocused
		}
		else{
			echo "<input name='rowanswer' type='text' class='lnews_data' size='30'>";
		}
		echo "</p>";
		echo "<input name='filename' type='hidden' value='$filename'>";
		echo "<p>";
		echo "<label>";
		echo "<input type='submit' name='submit' id='submit' value='Send'>";
		echo "</label>";
		echo "</p>";
	echo "</form>";
}
?>
</body>
</html>