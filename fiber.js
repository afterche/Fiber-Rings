// Im assign user for k1.u and k2.u
setTimeout(exit, 60000);//Extra EXIT
function exit(){
	phantom.exit();
}
var fs = require('fs');
var stream = fs.open('fiber', 'r');
var ps=fs.read("u.u");
ps=ps.trim();
var i=0;
var k=0;
var arr = [];
var ami="fiber.js";
console.log("Phantomjs.^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
console.log("Phantomjs. Hello I am "+ami);
console.log("Phantomjs.Hello!");


while(!stream.atEnd()){
	i++;
	var line = stream.readLine();
	arr[i]=line.trim();	
	//console.log("Phantomjs. User="+ps+" line="+arr[i]);
	if (arr[i]===ps){
		k=i;	
	}
}

if (k===0){//no user in the fiber	
	console.log("Phantomjs. User "+ps+" not found");
	console.log("Phantomjs.Files k1.u and k2.u dont change");
	console.log("Phantomjs.Exit.");
	console.log("-------------------------");
	phantom.exit();
}
else{
	console.log("Phantomjs. Length of fiber "+i+" pearl");
	console.log("Phantomjs. User "+ps+" at line "+k);
	console.log("Phantomjs.Construct fiber");
	if(k===i){	
		var k1u=arr[1];	
		var k2u=arr[2];	
	}	
	else if (k===(i-1)){	
		var k1u=arr[i];		
		var k2u=arr[1];	
	}	
	else {	
		var k1u=arr[k+1];		
		var k2u=arr[k+2];	
	}	
console.log("Phantomjs. Main user="+ps);
console.log("Phantomjs. k1u="+k1u);
console.log("Phantomjs. k2u="+k2u);	
fs.write("k1.u", k1u, 'w');
fs.write("k2.u", k2u, 'w');	
console.log("Phantomjs.Exit.");
console.log("-------------------------");
phantom.exit();}
