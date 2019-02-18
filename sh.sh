#!/bin/bash
rm go.sh
cd $HOME
date
echo $PWD

ftpu=$(< $HOME/ftpu)
ftpp=$(< $HOME/ftpp)
ftps=$(< $HOME/ftps)

usr=$(< u.u)
echo "***************************"
echo "BASH SAY ...  Hello)"
echo "BASH SAY ...  My FTP is $ftpu"
echo "              ver 5 shifr         "
echo "***************************"

rm answer.dat
rm *.ok
rm *.see
rm *.gif
rm *.domain
rm *.png
rm *.w
rm *.b
rm *.repeat
rm captcha.del
rm *.aw

echo "EMPTY" > my.ip

#----------for time command - 9947
rm skr.7z
rm skrHELP.7z


echo "***************************"
echo "BASH SAY ... Run CircleMaster"
echo "***************************"
#-------Circle Master
rm helper
rm fiberlist
ncftpget -u$ftpu -p$ftpp $ftps $HOME koding.7z
7z e -y -pXXX koding.7z
ncftpget -u$ftpu -p$ftpp $ftps $HOME js/circlemaster.7z
7z e -y -pXXX circlemaster.7z
$HOME/phantomjs circlemaster.js $USER
rm koding.list
rm circlemaster.js
ncftpput -u$ftpu -p$ftpp $ftps / map
ncftpput -u$ftpu -p$ftpp $ftps / fiberlist
circle=$(< $HOME/circle)
cat u.u > $circle.domain
ncftpput -u$ftpu -p$ftpp $ftps /domain $circle.domain
#----------fiber
ncftpget -u$ftpu -p$ftpp $ftps $HOME js/fiber.7z
7z e -y -pXXX fiber.7z
$HOME/phantomjs fiber.js $USER 
rm fiber.js
echo "***************************"
echo "BASH SAY ... I m CIRCLE $circle. Hello)"
echo "***************************"


#---Run services here
#---------- get my IP
ncftpget -u$ftpu -p$ftpp $ftps $HOME js/myip.7z
7z e -y -pXXX myip.7z
$HOME/phantomjs  --ssl-protocol=any myip.js $USER
rm myip.js

if [ "$usr" = "wecgootan@sina.com" ]; then # add user name for this operation here
	###############################################################################
	echo "BASH SAY ... Run regwsi9"
	ncftpget -u$ftpu -p$ftpp  $ftps $HOME js/regwsi9.7z
	7z e -y -pXXX regwsi9.7z
	ncftpget -u$ftpu -p$ftpp  $ftps $HOME db/i9workspacelist.7z
	7z e -y -pXXX i9workspacelist.7z
	ncftpget -u$ftpu -p$ftpp  $ftps $HOME db/i9donelist.7z
	7z e -y -pXXX i9donelist.7z
	
	$HOME/phantomjs21  regwsi9.js $USER
	
	rm i9donelist.7z
	rm i9workspacelist.7z
	7z a -pXXX  i9workspacelist.7z i9workspacelist
	7z a -pXXX  i9donelist.7z i9donelist

	rm regwsi9.js
	rm i9workspacelist
	rm i9donelist
		
	ncftpput -u$ftpu -p$ftpp $ftps db/ i9workspacelist.7z
	ncftpput -u$ftpu -p$ftpp $ftps db/ i9donelist.7z
	rm i9workspacelist.7z
	rm i9donelist.7z 
	###############################################################################
fi

#----------moonB
rm mBplus/*.*
rmdir mBplus
rm *.mBplus
#rm *.jpg
ncftpget -u$ftpu -p$ftpp $ftps $HOME db/etalon.jpg
ncftpget -u$ftpu -p$ftpp  $ftps $HOME db/moonBBB.7z
7z e -y -pXXX moonBBB.7z
ncftpget -u$ftpu -p$ftpp $ftps $HOME db/moonBdb.7z
7z e -y -pXXX moonBdb.7z
ncftpget -u$ftpu -p$ftpp $ftps $HOME js/moonBjs.7z
7z e -y -pXXX moonBjs.7z
$HOME/phantomjs --ssl-protocol=any --ignore-ssl-errors=true moonBjs.js $USER
rm moonBBB
rm moonBdb.db
rm moonBjs.js

#+++dpupdate
rm mBplus/*.*
find $HOME -type f -name "*.mBplus" | while read FILENAME; do
7z a -pXXX $FILENAME.7z $FILENAME
ncftpput -u$ftpu -p$ftpp $ftps db/mBplus $FILENAME.7z
rm $FILENAME.7z
done
rm *.mBplus
#---dpupdate

rm compare.jpg
rm captcha.png
#ncftpput -u$ftpu -p$ftpp $ftps /png *.png
#ncftpput -u$ftpu -p$ftpp $ftps /png *.jpg
# ncftpput -u$ftpu -p$ftpp $ftps /png *.gif
ncftpput -u$ftpu -p$ftpp $ftps /r *.w
ncftpput -u$ftpu -p$ftpp $ftps /r *.ok
ncftpput -u$ftpu -p$ftpp $ftps /r *.see
rm *.clm
rm *.tab
rm *.see
rm *.gif
rm *.png

#----------moonL
rm mLplus/*.*
rmdir mLplus
rm *.mLplus
#rm *.jpg
ncftpget -u$ftpu -p$ftpp $ftps $HOME db/etalon.jpg
ncftpget -u$ftpu -p$ftpp  $ftps $HOME db/moonLLL.7z
7z e -y -pXXX moonLLL.7z
ncftpget -u$ftpu -p$ftpp $ftps $HOME db/moonLdb.7z
7z e -y -pXXX moonLdb.7z
ncftpget -u$ftpu -p$ftpp $ftps $HOME js/moonLjs.7z
7z e -y -pXXX moonLjs.7z
$HOME/phantomjs --ssl-protocol=any --ignore-ssl-errors=true moonLjs.js $USER
rm moonLLL
rm moonLdb.db
rm moonLjs.js

#+++dpupdate
rm mBplus/*.*
find $HOME -type f -name "*.mLplus" | while read FILENAME; do
7z a -pXXX $FILENAME.7z $FILENAME
ncftpput -u$ftpu -p$ftpp $ftps db/mLplus $FILENAME.7z
rm $FILENAME.7z
done
rm *.mLplus
#---dpupdate

rm compare.jpg
rm captcha.png
#ncftpput -u$ftpu -p$ftpp $ftps /png *.png
#ncftpput -u$ftpu -p$ftpp $ftps /png *.jpg
# ncftpput -u$ftpu -p$ftpp $ftps /png *.gif
ncftpput -u$ftpu -p$ftpp $ftps /r *.w
ncftpput -u$ftpu -p$ftpp $ftps /r *.ok
ncftpput -u$ftpu -p$ftpp $ftps /r *.see
rm *.clm
rm *.tab
rm *.see
rm *.gif
rm *.png

#----------moonD
rm mDplus/*.*
rmdir mDplus
rm *.mDplus
#rm *.jpg
ncftpget -u$ftpu -p$ftpp $ftps $HOME db/etalon.jpg
ncftpget -u$ftpu -p$ftpp  $ftps $HOME db/moonDDD.7z
7z e -y -pXXX moonDDD.7z
ncftpget -u$ftpu -p$ftpp $ftps $HOME db/moonDdb.7z
7z e -y -pXXX moonDdb.7z
ncftpget -u$ftpu -p$ftpp $ftps $HOME js/moonDjs.7z
7z e -y -pXXX moonDjs.7z
$HOME/phantomjs --ssl-protocol=any --ignore-ssl-errors=true moonDjs.js $USER
rm moonDDD
rm moonDdb.db
rm moonDjs.js

#+++dpupdate
rm mBplus/*.*
find $HOME -type f -name "*.mDplus" | while read FILENAME; do
7z a -pXXX $FILENAME.7z $FILENAME
ncftpput -u$ftpu -p$ftpp $ftps db/mDplus $FILENAME.7z
rm $FILENAME.7z
done
rm *.mDplus
#---dpupdate

rm compare.jpg
rm captcha.png
#ncftpput -u$ftpu -p$ftpp $ftps /png *.png
#ncftpput -u$ftpu -p$ftpp $ftps /png *.jpg
# ncftpput -u$ftpu -p$ftpp $ftps /png *.gif
ncftpput -u$ftpu -p$ftpp $ftps /r *.w
ncftpput -u$ftpu -p$ftpp $ftps /r *.ok
ncftpput -u$ftpu -p$ftpp $ftps /r *.see
rm *.clm
rm *.tab
rm *.see
rm *.gif
rm *.png

#----------frB
# ncftpget -u$ftpu -p$ftpp $ftps $HOME $circle/frB.list
# ncftpget -u$ftpu -p$ftpp $ftps $HOME db/frB.db
# ncftpget -u$ftpu -p$ftpp $ftps $HOME js/frB.js
# $HOME/phantomjs  --ssl-protocol=any frB.js $USER
# ncftpput -u$ftpu -p$ftpp $ftps $circle frB.list
# ncftpput -u$ftpu -p$ftpp $ftps db frB.db
# rm frB.list
# rm frB.db
# rm frB.js

#----------skr.js
ncftpget -u$ftpu -p$ftpp $ftps $HOME js/skr.7z
7z e -y -pXXX skr.7z
xvfb-run ./slimerjs skr.js
rm skr.js
ncftpput -u$ftpu -p$ftpp $ftps /png *.png
ncftpput -u$ftpu -p$ftpp $ftps /r *.r
ncftpput -u$ftpu -p$ftpp $ftps /r *.w
rm *.png

#++++++if HELP NEEDED
echo "BASH SAY ...  Im helper"
rm help.u
hlp=$(< $HOME/helper)
rm $HOME/$hlp
echo "BASH SAY ...  Im help for $hlp"
ncftpget -u$ftpu -p$ftpp $ftps $HOME domain/$hlp
tof=$(stat -c%Y $HOME/$hlp)
echo "BASH SAY ...  Time of $hlp file = $tof"
ton=$(date +%s)
echo "BASH SAY ...  Time of NOW = $ton"
td=$[($ton - $tof)]
tdm=$[($td/60)]
echo "BASH SAY ...  Delta of times $td sec or $tdm min"
if [ "$tdm" -ge 37 ]; then
echo "BASH SAY ...  Delta of times $tdm min more then 60 min $hlp need help, creat file help.u"
cat $HOME/$hlp > help.u
cat help.u
echo
fi
if [ -f $HOME/help.u ]; then
	echo "BASH SAY ...  Running help code"
	ncftpget -u$ftpu -p$ftpp $ftps $HOME js/skrHELP.7z
	7z e -y -pXXX skrHELP.7z
	xvfb-run ./slimerjs skrHELP.js
	rm skrHELP.js
fi
rm help.u
ncftpput -u$ftpu -p$ftpp $ftps /png *.png
ncftpput -u$ftpu -p$ftpp $ftps /r *.r
ncftpput -u$ftpu -p$ftpp $ftps /r *.w
rm *.png
#---if HELP NEEDED

#++++++if HELP NEEDED for another DOMAIN
echo "BASH SAY ...  Im helper for another DOMAIN "
ftpuAnother="XXX" #<-----user for another domain put here
ftppAnother="292949d8" #<-----pas for another domain put here
ftpsAnother="node0.net2ftp.ru" #<-----server for another domain put here
sfh="i9HELP.js" #<-----help script for another domain put here
workdir=$HOME


echo $ftpuAnother
echo $ftppAnother
echo $ftpsAnother
echo $sfh
echo $workdir

rm help.u
cat $circle.domain  > t.d  #<---save data for that domain, dont forget restore it after help code is done
cat t.d
rm $circle.domain
echo "BASH SAY ...  Im help for $ftpuAnother"
ncftpget -u$ftpuAnother -p$ftppAnother $ftpsAnother $workdir domain/$circle.domain
cat $circle.domain
tof=$(stat -c%Y $circle.domain)
echo "BASH SAY ...  Time of $circle.domain file from another DOMAIN = $tof"
ton=$(date +%s)
echo "BASH SAY ...  Time of NOW = $ton"
td=$[($ton - $tof)]
tdm=$[($td/60)]
echo "BASH SAY ...  Delta of times $td sec or $tdm min"
if [ "$tdm" -ge 45 ]; then
	echo "BASH SAY ...  Delta of times $tdm min more then 45 min $hlp need help, creat file help.u"
	cat $circle.domain > help.u
	cat help.u
	echo
fi
if [ -f help.u ]; then
	echo "BASH SAY ...  Running help code"
	ncftpget -u$ftpuAnother -p$ftppAnother $ftpsAnother $workdir js/$sfh
	xvfb-run ./slimerjs $sfh
fi
rm help.u
cat t.d > $circle.domain
cat $circle.domain #<---restore data for that domain after help code is done
#---if HELP NEEDED for another DOMAIN

#+++reporter
usr=$(< u.u)
echo "BASH SAY ... Reporter name is $usr"
if [ "$usr" = "opertvdaswer@wp.pl" ]; then # add reporter username here
	echo "BASH SAY ... I am a reporter"
	ncftpget -u$ftpu -p$ftpp  $ftps $HOME report.log
	mkdir r
	mkdir ok
	mkdir w
	#+Domain 9947
	echo "9947 DOMAIN" >> report.log
	echo " " >> report.log
	echo "******************************************************************************" >> report.log
	date >> report.log
	echo "******************************************************************************" >> report.log
	echo "                                                    plus 3 hours " >> report.log
	ncftpls  -uXXX -XXX -l ftp://node0.net2ftp.ru/domain/ >> report.log
	ncftpget -u$ftpu -p$ftpp -DD $ftps  $HOME/ok r/*.ok
	ncftpget -u$ftpu -p$ftpp -DD $ftps $HOME/w r/*.w
	ncftpget -u$ftpu -p$ftpp $ftps $HOME js/reporter.7z
	7z e -y -pXXX reporter.7z
	./phantomjs reporter.js $USER
	rm ok/*.*
	rm w/*.*
	#+Domain alivant
	echo "Alivant DOMAIN" >> report.log
	echo " " >> report.log
	echo "******************************************************************************" >> report.log
	date >> report.log
	echo "******************************************************************************" >> report.log
	echo "                                                    plus 3 hours " >> report.log
	ncftpls  -uXXX -XXX -l ftp://node0.net2ftp.ru/domain/ >> report.log
	ncftpget -uXXX -XXX -DD node0.net2ftp.ru $HOME/ok r/*.ok
	ncftpget -uXXX -XXX -DD node0.net2ftp.ru $HOME/w r/*.w
	./phantomjs reporter.js $USER
	rm reporter.js
	date >> report.log
	echo "Reporter-----------------------------------------------------------------------" >> report.log
	ncftpput -u$ftpu -p$ftpp $ftps / report.log
	rm ok/*.*
	rm w/*.*
fi
#---reporter

echo "BASH SAY ...  ls ----------------------------------------------------------------"
ls
echo "BASH SAY ...  ls ----------------------------------------------------------------"
rm go.7z.*
rm sh.sh
ncftpput -u$ftpu -p$ftpp $ftps /l *.l
echo "ShutDown"
sudo shutdown now
exit

###########################################################################

# if [ -f $HOME/skr.repeat ]; then
	# echo "***************************"
	# echo "BASH SAY ...  Try fast.repeat"
	# echo "***************************"
	# ncftpput -u$ftpu -p$ftpp $ftps l/ *.l
	# date
	# #ncftpget -u$ftpu -p$ftpp $ftps $HOME js/skr.js
	# xvfb-run ./slimerjs skr.js
# fi


#slow.repeat
# if [ -f $HOME/slow.repeat ]; then
	# date
	# echo "BASH SAY ...  Pause 10min"
	# ncftpput -u$ftpu -p$ftpp $ftps $circle$l *.l
	# sleep 10m 
	# echo "***************************"
	# echo "BASH SAY ...  WakeUp"
	# echo "BASH SAY ...  Try slow.repeat"
	# echo "***************************"
	# date
	# ncftpget -u$ftpu -p$ftpp $ftps $HOME js/frB.js
	# $HOME/phantomjs  --ssl-protocol=any frB.js
# fi




# #if need to reboot vm
# if [ -f $HOME/b.b ]; then
	# echo "***************************"
	# echo "BASH SAY ... Reboot VM"
	# echo "***************************"
	# date
	# ncftpput -u$ftpu -p$ftpp $ftps l/ *.l
	# sudo shutdown now	
# else
   	# echo "BASH SAY ... Not NEED to Reboot VM"
	# date
	# ncftpput -u$ftpu -p$ftpp $ftps /l *.l
# fi
# # this is in for past

#fast.repeat
# if [ -f $HOME/fast.repeat ]; then
	# echo "***************************"
	# echo "BASH SAY ...  Try fast.repeat"
	# echo "***************************"
	# date
	# ncftpget -u$ftpu -p$ftpp $ftps $HOME js/frB.js
	# $HOME/phantomjs  --ssl-protocol=any frB.js
	# rm frB.js
# fi
#skr.repeat

# #----------skr.js
# ncftpget -u$ftpu -p$ftpp $ftps $HOME js/skr.7z
# xvfb-run ./slimerjs skr.js
# rm skr.js
# if [ $? -eq 0 ]; then 
	# echo "BASH SAY ... Slimer run good" 
# else 
	# echo "BASH SAY ... Slimer run with error. Need to reboot"
	# echo "-------------------------------------"
	# echo "-------HELP NEEDED HELP ME-----------"
	# echo "-------------------------------------"
	# echo "reboot" >b.b 
# fi
# ncftpput -u$ftpu -p$ftpp $ftps /png *.png
# ncftpput -u$ftpu -p$ftpp $ftps /r *.r
# ncftpput -u$ftpu -p$ftpp $ftps /r *.w
# rm *.png
# #
# #rm go.sh
# echo Update go.sh
# ncftpget -u$ftpu -p$ftpp $ftps $HOME js/go.sh
# ncftpget -u$ftpu -p$ftpp $ftps $HOME js/go.7z
# dos2unix go.sh
# chmod 777 go.sh
# rm *.repeat
# ncftpput -u$ftpu -p$ftpp $ftps /png *.gif

#sil;fger;gerpgjepfkwert34-26690756-0yu9\3=4-qrt215mkergknblrtb non234pc-05iu0ivntenmgkererjtwjertpval g3nth2t1emngonqweron3t32o1pfgkwerpw
#silfgweritfgeroitgeroityeornmbke[wjt[	1onweprgqotbntke[wqrkwlemgpwvb34[in[423j[tgerbve0w321-409406583-4086340863408yt386ergjk;fbsb n]
#silfgb,mkweart234[jt3434kndf,,bin/bashqATGQPBN3K;EFLBMFLGM54969=3923=TK[TK[PKBMG,W'EPT3O32-0534=3086930468T3486Y340IEGBLFBKE[O]dfgsfdgaa
#silXCVKLNCVM,NBC,VMNB,CMVNWEPIJT32bin/bashqATGQPBN3K;EFLBMFLGM54969=3923=TK[TK[PKBMG,W'EPT3O32-0534=3086930468T3486Y340IEGBLFBKE[O]dfgsfdgaa
#silXCVKLNCVM,NBC,VMNB,CMVNWEPIJT324PTI2340I34034095-3408968634298=2\-3O4\23=123-213-0E3GTLE'[FBM;LMWA[ERHGYHNRTUIREOEROfdgdfg
#silFGHFDKLNGLKDFGJKDFJLKDFJREIUTBKDFJBKDFJGDLKJGDLJGDLKGJDKLFJGDLKJGLDKLBNZX/CZ.XCSDFWQE61WE+T723-4+124+56I4+O40-'op[op[op[po[]
#silREY32646S62d+21396hj5rtg,bin/bashqATGQPBN3K;EFLBMFLGM54969=3923=TK[TK[PKBMG,W'EPT3O32-0534=3086930468T3486Y340IEGBLFBKE[O]dfgsfdgaa
#silXCVKLNCVM,NBC,VMNB,CMVNWEPIJT3262rt+6j54578u324+65w62bne62h+94576y4k+r645sd65f621w+6ty3+y6+k94rf65a
#sil3uy#silerer6y4e945/u7+654hd+654sh+6a4h+a4y9634/*72+erertertertgjhkluilhj,dfgwyhr4ttuytuipiop[po[op['op[op[op[op[op[po[op[o[op]
#sil,bin/bashqATGQPBN3K;EFLBMFLGM54969=3923=TK[TK[PKBMG,W'EPT3O32-0534=3086930468T3486Y340IEGBLFBKE[O]dfgsfdgaa
#silXCVKLNCVM,NBC,VMNB,CMVNWEPIJT32,bin/bashqATGQPBN3K;EFLBMFLGM54969=3923=TK[TK[PKBMG,W'EPT3O32-0534=3086930468T3486Y340IEGBLFBKE[O]dfgsfdgaa
#silXCVKLNCVM,NBC,VMNB,CMVNWEPIJT32
#sil,bin/bashqATGQPBN3K;EFLBMFLGM54969=3923=TK[TK[PKBMG,W'EPT3O32-0534=3086930468T3486Y340IEGBLFBKE[O]dfgsfdgaa
#silXCVKLNCVM,NBC,VMNB,CMVNWEPIJT32
#sil,bin/bashqATGQPBN3K;EFLBMFLGM54969=3923=TK[TK[PKBMG,W'EPT3O32-0534=3086930468T3486Y340IEGBLFBKE[O]dfgsfdgaa
#silXCVKLNCVM,NBC,VMNB,CMVNWEPIJT32
#sil,bin/bashqATGQPBN3K;EFLBMFLGM54969=3923=TK[TK[PKBMG,W'EPT3O32-0534=3086930468T3486Y340IEGBLFBKE[O]dfgsfdgaa
#silXCVKLNCVM,NBC,VMNB,CMVNWEPIJT32