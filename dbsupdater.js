var fs = require("fs");
var home_dir= fs.workingDirectory;
var circle=(fs.read("circle")).trim();

setTimeout(err_exit, 600000);//Extra EXIT
// I am
var ami = "dbsupdater.js";//system.args[0];//code name
console.log("Phantomjs.^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
console.log("Phantomjs. Hello I am "+ami);
var report=ami+" ";


function updatedb(){
	console.log("Phantomjs.Update db");
	//*******************************
	var dir ="mDplus";
	var dbname="moonD.db"
	//********************************
	execFile("rm", [dbname], null, function (err, stdout, stderr) {
        console.log("RM "+dbname+" from local host ");
        console.log(stderr);
		nxt();
    })
	function nxt(){
		var ftpu=fs.read("ftpu").trim();
		var ftpp=fs.read("ftpp").trim();
		var ftps=fs.read("ftps").trim();
		execFile("ncftpget", ["-u"+ftpu,"-p"+ftpp,"-DD",ftps,home_dir,"db/"+dbname], null, function (err, stdout, stderr) {
			console.log("Phantomjs. Move db file from ftp to local host"+dbname);
			console.log(stderr);
			console.log(stdout);
			execFile("mkdir", [dir], null, function (err, stdout, stderr) {
				console.log("Phantomjs. Make dir "+dir);
				console.log(stderr);
				console.log(stdout);
				execFile("ncftpget", ["-u"+ftpu,"-p"+ftpp,"-DD",ftps,home_dir+"/"+dir,"db/"+dir+"/*.*"], null, function (err, stdout, stderr) {
					console.log("Phantomjs. Move plus files from ftp to local host");
					console.log(stderr);
					console.log(stdout);
					console.log("Phantomjs.Read db file "+dbname);
					if (!fs.isFile(dbname)){
						console.log("Phantomjs.ERROR. Can't finde "+dbname+" file."); 
						report+="*"+"Can't finde "+dbname+" file.";
						fs.write(ur+".w", new Date()+report, 'a');
						phantom.exit();
					}
					var stream = fs.open(dbname, 'r');
					var ara=[];
					var i=0;
					console.log("Phantomjs.File present reading file to arr...");
					while(!stream.atEnd()) {
						var line = stream.readLine();
							if (line != ""){
							i++;
							ara[i]=line.trim();
						}
					}
					stream.close();
					console.log("Phantomjs.Line in db file = "+i);
					console.log("Phantomjs.Get a list all files in directory... "+dir);
					var list = fs.list(dir);
					console.log("Phantomjs.Quantity files in the "+dir+" = "+ list.length);
					for(var x = 0; x < list.length; x++){
						var file = dir + "/" + list[x];
						if(fs.isFile(file)){
							console.log("Phantomjs.Reading from file "+file);
							i++;
							ara[i]=fs.read(file).trim()
						}
					}
					console.log("Phantomjs.Line in UPDATING db file = "+i);
					console.log("Phantomjs.Rewrite DB file");
					for (var z = 1;z<=i ; z++) {
						if(z===1){
							fs.write(dbname,ara[z]+"\n", 'w');	
						}
						else{
							fs.write(dbname,ara[z]+"\n", 'a');	
						}
					}
					console.log("Phantomjs.Send new db to the server");
					execFile("ncftpput", ["-u"+ftpu,"-p"+ftpp,ftps,"/db",dbname], null, function (err, stdout, stderr) {
						console.log("Phantomjs.Sending new db to the server. Send "+dbname);
						console.log(stderr);
						console.log(stdout);
						if ( hsi<=hsietalon ){
							console.log("Phantomjs.Goto compare.");
							compare_user();
						}
						else{
							console.log("Phantomjs. Trying next time. ");
							console.log("Phantomjs.Exit after 150000 ms.");
							console.log("-------------------------");
							setTimeout(do_not_be_greedy, 150000);
						}
					})
				})
			})
		})
	}	
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