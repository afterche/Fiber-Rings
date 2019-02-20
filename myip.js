var page = require("webpage").create();
var fs = require("fs");
var home_dir= fs.workingDirectory;
var ami = "myip.js";//system.args[0];//code name

console.log("Phantomjs.^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
console.log("Phantomjs. Hello I am "+ami);
console.log("Phantomjs.Hello!");

setTimeout(exit_by_timeout, 120000);//Extra EXIT
function exit_by_timeout(){
	err_index = String(Math.random()).slice(9);
	fs.write(err_index+".w","ERROR!!! - Exit by timeout", 'w');
	console.log("Phantomjs.ERROR!!! - Exit by timeout");
	console.log("Phantomjs.Exit.");
	console.log("-------------------------");
	phantom.exit();
}


page.open('http://www.howtofindmyipaddress.com/', function (status) {
    if(status !== "success") {
        console.log ("Phantomjs.Cant to load page");
		var	err_index = String(Math.random()).slice(9);
		fs.write(err_index+".w","ERROR!!! - Cant to load page myip", 'w');
		console.log("Phantomjs.ERROR!!! - Cant to load page myip ");
		console.log("Phantomjs.Exit.");
        phantom.exit();
    } else {
		console.log ("Phantomjs.Page Load. Good.");
        getipexit();
	}
});

function getipexit(){
	console.log("Phantomjs.Try to get ip.");
    var myip=page.evaluate(function(){
        return document.getElementsByTagName("span")[1].innerText;
    });
	if(myip){
		console.log("*****Phantomjs.Myip="+myip);
	}
	else{
		console.log("Phantomjs.Cent get Myip="+myip);
		myip = "EMPTY";
		console.log("Phantomjs.Myip="+myip);
	}
	fs.write("my.ip", myip, 'w');
	console.log("Phantomjs.Exit.");
    console.log("-------------------------");
	phantom.exit();
}
