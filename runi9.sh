#!/bin/bash

	#---DOMAIN
	ftpu="XXX"
	ftpp="XXX"
	ftps="XXX"

	# add time circle
	echo "timecircle" > circle
	
	#---subDOMAIN
	echo "i9.list" > list.file #<--- ad domain list here
	workdir="home/ubuntu/workspace" #<--- ad work dir here

	clear
	uname -a
	sudo apt-get update
	sudo apt-get -y install dos2unix
	sudo apt-get -y install ncftp
	sudo apt-get -y install p7zip-full
	#phantomjs
	ncftpget -u$ftpu -p$ftpp $ftps /home/ubuntu/workspace/ public_ftp/distrib/pjs.tar.gz
	tar -xvf pjs.tar.gz
	#phantomjs21
	mv phantomjs phantomjs17
	ncftpget -u$ftpu -p$ftpp $ftps /home/ubuntu/workspace/ public_ftp/distrib/phantomjs-2.1.1-linux-x86_64.tar.bz2
	tar -xvf /home/ubuntu/workspace/phantomjs-2.1.1-linux-x86_64.tar.bz2
	mv /home/ubuntu/phantomjs-2.1.1-linux-x86_64/bin/phantomjs /home/ubuntu/phantomjs
	
	mv phantomjs phantomjs21
	mv phantomjs17 phantomjs
	
	#---DOMAIN
	ftpu="XXX"
	ftpp="XXX"
	ftps="XXX"

	#slimerjs
	ncftpget -u$ftpu -p$ftpp $ftps /home/ubuntu/workspace/ public_ftp/distrib/slimerjsx64.tar.gz
	tar -xvf slimerjsx64.tar.gz
	
	# xvfb
	sudo apt-get -y install xvfb
	rm pjs.tar.gz
	rm /home/ubuntu/phantomjs-2.1.1-linux-x86_64.tar.bz2
	rm -r /home/ubuntu/phantomjs-2.1.1-linux-x86_64
    rm slimerjsx64.tar.gz
	ls

