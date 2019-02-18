#!/bin/bash
cd $HOME
ftpu=$(< $HOME/ftpu)
ftpp=$(< $HOME/ftpp)
ftps=$(< $HOME/ftps)
rm go.sh
rm sh.sh
rm go.7z.*
echo $PWD
echo DownLoad and run sh.sh
ncftpget -u$ftpu -p$ftpp $ftps $HOME js/sh.7z
7z e -y -pXXX sh.7z
dos2unix sh.sh
chmod 777 sh.sh
su=$(< u.u)
circle=$(< circle)
rm *.l
echo "run sh.sh"
./sh.sh wc * >  $circle$su.l 2>&1

