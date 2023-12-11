#!/bin/sh

echo "ROOT access - ok"
cd / && mount -uw /sdc1/; sleep 1

echo "SWaP patch - ok"
umount -f /extbin && mkdir /home/mmc0t177_tmp && mount -t qnx6 /dev/mmc0t177 /home/mmc0t177_tmp && cp -VRf /sdc1/SWaP /home/mmc0t177_tmp/apps/bin/ && chmod 777 /home/mmc0t177_tmp/apps/bin/SWaP && umount -f /home/mmc0t177_tmp && rm -R /home/mmc0t177_tmp; sleep 1

echo "FINISHED - You can now remove SD Card"