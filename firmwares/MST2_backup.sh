#!/bin/sh

echo "ROOT access - OK"
cd / && mount -uw /sdc1/; sleep 1

echo "Making backup dir on SD Card - OK"
mkdir /sdc1/backup/; sleep 1

echo "SWaP *.fec files backup - OK"
cp -Rf /persistence/SWaP/* /sdc1/backup/; sleep 1

echo "backup /ffs/etc/* - OK"
cp -Rf /ffs/etc/* /sdc1/backup/; sleep 1

echo "delphibin.ifs backup - OK"
cp -f /extbin/apps/bin/delphibin.ifs /sdc1/backup/delphibin.ifs; sleep 1

echo "InstallationManager backup - OK"
cp -f /ffs/sbin/InstallationManager /sdc1/backup/InstallationManager; sleep 1

echo "SWaP engine backup - OK"
umount -f /persistence && mkdir /home/mmc0t180_tmp && mount -t qnx6 /dev/mmc0t180 /home/mmc0t180_tmp && cp -Rf /home/mmc0t180_tmp/SWaP/* /sdc1/* && umount -f /home/mmc0t180_tmp && rm -R /home/mmc0t180_tmp; sleep 1

echo "profile backup - OK"
cp -f /ffs/etc/profile /sdc1/backup/profile; sleep 1

echo "MHConfig.cfg backup - OK"
cp -f /extbin/apps/cfg/MHConfig.cfg /sdc1/backup/MHConfig.cfg; sleep 1

echo "fs0 backup - OK"
cat /dev/fs0 > /sdc1/backup/fs0; sleep 1

echo "Saving unit info to file - OK"
APUpdateLight -i >> /sdc1/backup/unit_info.txt; sleep 1

echo "emmc serial numbler - SAVED"
sdtool emmc info >> /sdc1/backup/emmc_serial_number.txt; sleep 1

echo "FINISHED - You can now remove SD Card"