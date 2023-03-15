---
author: SeanFromIT
comments: "true"
date: 2007-10-05 15:59:00+00:00
layout: post
link: https://feeney.mba/2007/10/05/electric-sheep-screensaver-in-fedora-7/
slug: electric-sheep-screensaver-in-fedora-7
title: Electric Sheep Screensaver in Fedora 7
wordpress_id: 234
categories:
- fedora
- gnome
- linux
---

Based on Erik Reckase's: [electricsheep screensaver with gnome-screensaver in Ubuntu](http://ubuntuforums.org/showthread.php?t=355607)  
  
I have to run the screensaver under gnome. There is a lot of documentation on the xscreensaver hack to get this to work under KDE, but I couldn't get it to work.  
  
Getting Ready:  
You will need the following packages to compile the electricsheep client :  
  
   * libc6-dev  
   * libexpat1-dev  
   * libice6-dev  
   * libjpeg62-dev  
   * libpng12-dev  
   * libsm6 (not sure)  
   * libx11-dev  
   * libxext-dev  
   * libxv-dev  
   * libxml2-dev  
   * zlib1g-dev  
   * curl  
   * xloadimage  
   * libjpeg-progs  
  
All of these were already installed except xloadimage, and yum did not have an xloadimage listing. So I had to download and install [an old Fedora 3 xloadimage](http://download.fedora.redhat.com/pub/fedora/linux/core/updates/3/i386/xloadimage-4.1-35.FC3.i386.rpm).  
  
Step 1:  
Grab the latest sources from electricsheep.org (currently 2.6.8):  
[http://electricsheep.org/index.cgi?&menu=code](http://electricsheep.org/index.cgi?&menu=code)  
Click the source tarball link, and extract the folder to your home directory.  
  
Step 2:  
In the electricsheep-2.6.8 directory, perform  
Code:  

    
    <br></br>./configure<br></br>make clean all<br></br>

  
Step 3:  
Edit Makefile with a text editor. You need to remove these lines from the end of the file:  
Code:  

    
    <br></br> test -e $(SCREENSAVER_DATADIR) && $(INSTALL) electricsheep.xml $(SCREENSAVER_DATADIR)<br></br> $(INSTALL) -d $(pkgdatadir)<br></br>

  
Delete these lines from the file and save it. These lines referred installing the xscreensaver xml file that no longer works for the gnome-screensaver. The test failed, so the install will fail unless these lines are removed.  
  
Step 4:  
Code:  

    
    <br></br>make install<br></br>

  
Step 5:  
Create a folder that will hold your Sheep. Many folks use ~/.sheep for this, but it can be anything in your local area.  
  
Step 6:  
This is the secret sauce. As root, or using sudo, create a text file in the /usr/share/applications/screensavers directory called esheep.sh, and paste the following text into the file:  
Code:  

    
    <br></br>#!/bin/sh<br></br>exec electricsheep --nick xxxx --root 1 --max-megabytes 2000 --zoom 1 --display-anim 1 --show-errors 0 --nrepeats 2 --frame-rate 30 --save-dir yyyy<br></br>

  
Replace xxxx with the nickname you would like to be known by on the server.  
Replace yyyy with the full path to the directory created in Step 5.  
  
Step 7:  
Code:  

    
    <br></br>sudo chmod 755 esheep.sh<br></br>

  
Step 8:  
As root, or using sudo, create a text file in the /usr/share/applications/screensavers directory called electricsheep.desktop, and past the following text into the file:  
Code:  

    
    <br></br>[Desktop Entry]<br></br>Encoding=UTF-8<br></br>Name=ElectricSheep<br></br>Comment=Electric Sheep is a distributed screen-saver that harnesses idle computers into a render farm with the purpose of animating and evolving artificial life-forms. This module requires a high-bandwidth, always-on connection to the internet such as DSL or cable-modem. The first time you run it, it normally takes 5 to 10 minutes before the first sheep is downloaded and displayed. After that, it should come up immediately. If you have installed the hacked xscreensaver that supports passing key-presses onto the graphics hack and this feature is enabled, then pressing the up arrow-key transmits a vote for the currently displayed sheep to the server. The votes are the basis of a fitness function for an evolutionary algorithm on the sheep genomes. Vote for the sheep you like, and they will mate, reproduce, and evolve! See http://electricsheep.org for more information. This is version 2.6.8.<br></br>TryExec=esheep.sh<br></br>Exec="esheep.sh"<br></br>StartupNotify=false<br></br>Terminal=false<br></br>Type=Application<br></br>Categories=Screensaver<br></br>

  
Step 9:  
gnome-screensaver resets every 10 minutes as part of the random selection - even if random isn't chosen. We need to change that to a larger number, otherwise nothing will render or download properly.  
Code:  

    
    <br></br>gconftool-2 --type int --set /usr/share/gnome-screensaver/cycle-delay 10000<br></br>

  
Step 10:  
System->Preferences->Power Management: Change the setting to put the display to sleep when inactive to 'Never' by dragging the bar all the way to the right. Alternatively,  
Code:  

    
    <br></br>gconftool-2 --type int --set /usr/share/gnome-power-manager/ac_sleep_display 0<br></br>

  
Step 11:  
Open the gnome-screensaver selection dialog, pick electricsheep, and enjoy. It might take some time to get a sheep, so be patient. If you want to test it, you can download individual sheep from the electricsheep website and place them in your sheep storage directory.
