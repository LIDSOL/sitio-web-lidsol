---
title: "Install ROS on Any Distro Using debootstrap and proot"
excerpt: "ROS is awesome, unfortunately it is only distributed for Debian :c "
authors: ['emilio1625']
date: "2019-12-22"
readTime: "5 min"
tags:
  - "ROS"
  - "hardware"
  - "debian"
  - "proot"
---

## Introduction

ROS (Robot Operating System) is a collection of software packages that allows
you to control a large number of sensors and actuators, and provides
pre-programmed algorithms and tools for simulating robotic environments.
Unfortunately, it is only distributed for Debian and Ubuntu.

At the moment I am using Void Linux as the main distribution on my laptop,
but to work on my thesis I need to have ROS installed. I could install a
virtual machine or create a Debian partition, but I’m too lazy to configure
all that and it’s inconvenient for multiple reasons. Recompiling ROS for my
distro is a long and tedious task (I’ve done it before), so that’s not an
option either.

As an alternative, I decided to use proot and debootstrap to have a Debian
environment inside Void, which I can use whenever I need ROS without
rebooting or using a virtual machine.

`proot(1)` is a tool I usually use to have a GNU/Linux-like environment on
my Android phone. If you’re not familiar with the concept of `chroot(1)`,
I recommend reading about it first (although if you follow the steps
carefully you might not have any problems — though that never really happens ;).

`debootstrap(8)` is a utility that installs a minimal version of Debian,
which we are going to chroot into.

## Let’s get started

First, we need to install debootstrap and proot. This varies from distro
to distro. In my case, both programs are in the official Void Linux
repositories and they are probably also available in your distro’s repos.

```shell
$ xbps-install debootstrap proot
```

Once installed, let’s create a folder where the Debian system we are going
to install will live.

```shell
$ mkdir -p ~/Documentos/tesis/ROS
$ cd ~/Documentos/tesis/ROS
```

Now we must select the Debian version to install. According to the ROS
website, the LTS version Melodic Morenia is only available for Debian 9
Stretch. If you plan to use another version, check which Debian version
it supports. The Debian mirror closest to me is
<http://mmc.geofisica.unam.mx>, so I will run debootstrap specifying the
Debian version and the mirror to download the packages from.

```shell
$ sudo debootstrap stretch . ftp://mmc.geofisica.unam.mx/debian/
...
I: Base system installed successfully.
```

If everything goes well, in less than 5 minutes you should have a small
Debian installation inside the `ROS` folder.

Now let’s change file permissions, since debootstrap insists on running
as root even when it’s not necessary.

```shell
$ sudo chmod -R $USER:$USER .
```

Let’s enter this Debian environment. To avoid confusion, when executing
commands inside Debian I will use the symbol `>` to represent the prompt
inside Debian, and `$` inside Void.

After the following command, the terminal will behave as if you were inside
a Debian installation, and we will be able to install ROS following the
official ROS instructions.

```shell
$ proot -R . /bin/bash -l
>
```

If everything worked, you should now be inside a Debian installation.
Let’s verify that.

```shell
$ cat /etc/debian_version
9.11
```

As you can see, we are now inside Debian — but only in this terminal.
If you open a new terminal, the environment will not be Debian but the
distro you are currently using.

⚠️ WARNING

Launching `proot` this way makes your HOME folder shared between your
distro and Debian, which may cause conflicts between configuration files
of different programs. If you want to use a different HOME directory for
Debian, launch `proot` like this:

```shell
$ HOME=/path/to/HOME/for/Debian proot -R . /bin/bash -l
>
```

Now let’s install ROS. For that, we need to be root inside Debian.
In this case, we will use proot as follows:

```shell
$ exit                     # leave the Debian installation
$ proot -S . /bin/bash -l  # and enter again
#
```

When we launch `proot` with the `-S` flag, it starts a shell as root
inside Debian, since we cannot use `sudo` inside Debian when using proot.
To represent that we are root inside the Debian environment, I will use
the `#` symbol for the prompt.

Now we just need to add the ROS repositories to Debian, update, and install ROS.

```shell
# cat <<- EOF > /etc/apt/sources.list
    ###### Debian Main Repos
    deb http://deb.debian.org/debian/ oldstable main contrib non-free
    deb http://deb.debian.org/debian/ oldstable-updates main contrib non-free
    deb http://deb.debian.org/debian-security oldstable/updates main
    deb http://ftp.debian.org/debian stretch-backports main
    ###### ROS Repo
    deb http://packages.ros.org/ros/ubuntu stretch main
EOF

# apt update
# apt-key adv --keyserver hkp://ha.pool.sks-keyservers.net:80 --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654
# apt update && apt install ros-melodic-desktop
```

Done. Now you have ROS installed on your system. There are still some
things left to configure, but you can read about that in the ROS
documentation:
http://wiki.ros.org/melodic/Installation/Debian#Initialize_rosdep

Finally, if you are going to use ROS frequently, you may want to create
an alias to quickly access Debian. In `bash` and `zsh` you would do:

```shell
$ alias debian="proot -R ~/Documentos/tesis/ROS /bin/bash -l"
$ alias debiansu="proot -S ~/Documentos/tesis/ROS /bin/bash -l"
```

## Conclusion

By following this procedure you can install any other version of ROS on
any Linux system, even on an Android phone or tablet. If you encounter
difficulties with the procedure, you can always approach LIDSOL for help.

