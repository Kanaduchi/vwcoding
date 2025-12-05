#!/bin/sh

echo "ROOT access - ok"
cd / && mount -uw /sdc1/; sleep 1

echo "*.FEC installation - ok"
umount -f /persistence && mkdir /home/mmc0t180_tmp && mount -t qnx6 /dev/mmc0t180 /home/mmc0t180_tmp && rm -f /home/mmc0t180_tmp/SWaP/pg/* && rm -f /home/mmc0t180_tmp/SWaP/illegal/* && cp -f /sdc1/*.fec /home/mmc0t180_tmp/SWaP/new && umount -f /home/mmc0t180_tmp && rm -R /home/mmc0t180_tmp; sleep 1

echo "FINISHED - You can now remove SD Card"