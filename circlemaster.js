setTimeout(exit, 100000);//Extra EXIT
var report ="";
//Amount Rosinka
var ros=7; 

function exit(){
	phantom.exit();
	console.log("Phantomjs. ERROR exit by timeout");
}
var fs = require('fs');

var ps=fs.read("u.u");
ps=ps.trim();

var list_file=fs.read("list.file");
list_file=list_file.trim();

var ami="CircleMaster.js";
console.log("Phantomjs.^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
console.log("Phantomjs. Hello I am "+ami);
console.log("Phantomjs.Hello!");
console.log("Phantomjs.Main User is "+ ps);
console.log("Phantomjs.Amount rosinok in the fiber = "+ros);
console.log("Phantomjs. Im Construct fiber ...");
console.log("Phantomjs.list_file="+list_file);
if (!fs.isFile(list_file)){
		console.log("Phantomjs.ERROR. Can't finde list_file file"); 
		fs.write("Cantlist_filefinde.w", new Date()+"Cant finde list_file file", 'w');
		phantom.exit();
}
var stream = fs.open(list_file, 'r');
var i=0;//nomber line in the file
var ara=[];
while(!stream.atEnd()) {
	var line = stream.readLine();
	if (line != ""){
		i++;
		ara[i]=line.trim();
	//console.log("Phantomjs.Rosinka "+i+" = "+ara[i]);	
	}
}
console.log("Phantomjs.Found  "+i+" unit in the list_file");
var c=1;//circle nomber
var fib=[];
var k=1;// 

fs.write("map",c+"\n", 'w');
while (k<=i){
	for (var y=1;y<=ros;y++){
		if (ara[k]){//if last circle not Full have less rosinok
			fib[c,y]=ara[k];
			//console.log("Phantomjs.c="+c+" y="+y+" fib[c,y]="+fib[c,y]);
			fs.write("map",c+"."+y+" "+ara[k]+"\n", 'a');
			fs.write("fiberlist",ara[k]+";"+c+"\n", 'a');
			//main user
			if (ara[k]===ps){
				console.log("Phantomjs.***** Adding main  user "+k+" "+ara[k]+" how "+y+" rosinku  in "+c+" circle");
				var su=c+"."+y;
				console.log("Phantomjs.su.u="+su);
				fs.write("su.u",su, 'w');
				console.log("Phantomjs.Update circli file, circle for this user="+c);
				fs.write("circle",c, 'w');
				var ch=c+1;
				fs.write("helper",ch, 'w');
				var cc=c;//remember circle nomber for the maine user
			}
			else{
				//console.log("Phantomjs.Adding user "+k+" "+ara[k]+" how "+y+" rosinku  in "+c+" circle");
			}
		}
		else{
			console.log("Phantomjs.1Construction complete. Constract "+c+" fiber with "+ros+" in own fiber");
			fibcon(fib);		
		}
		k++;
	}
	c++;
	//------------That only for 9947 domain
	//if (c===5){
		//ros=ros+1;
		//console.log("Phantomjs.WARNING for 9947 domaine change nomber of rosinok in the circle to "+ros);
	//}
	//------------That only for 9947 domain
	fs.write("map",c+"\n", 'a');
}
if (ch===c){
	console.log("ch="+ch+" c="+c);
	console.log("Phantomjs.Im last circle im help for 1 circle");
	fs.write("helper","1", 'w');
}
console.log("Phantomjs.2Construction complete.");
fibcon(fib);

function fibcon(fib){
	console.log("Phantomjs.Create fiber file.");
	fs.write("fiber","", 'w');
	var str = fs.open('fiberlist', 'r');
	while(!str.atEnd()) {
		line = str.readLine();
		if (line != ""){
			line=line.trim();
			var fromfiberlist=line.substring(line.lastIndexOf(";")+1);
			fromfiberlist=parseInt(fromfiberlist);
			//console.log("Phantomjs.c="+cc+" fromfiberlist="+fromfiberlist);
			if (fromfiberlist===cc){
				console.log("Phantomjs.Adding rosinku "+line.substring(0,line.lastIndexOf(";"))+" to the fiber.");
				fs.write("fiber",line.substring(0,line.lastIndexOf(";"))+"\n", 'a');
			}
		}
	}
	str.close();
	console.log("Phantomjs. EXIT");
	console.log("Phantomjs.-----------------------------------");
	phantom.exit();	
}