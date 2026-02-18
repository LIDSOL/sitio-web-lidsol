---
title: "Vagrant"
summary: "Vagrant: meta manager of virtual machines and containers"
authors: [tonejito]
tags: [open source, blog, post, vagrant, virtual machine, virtualbox, linux, macos]
categories: []
date: 2021-07-23T13:14:15-05:00
lastmod: 2019-07-23T14:15:16-05:00
featured: false
draft: false

image:
  caption: "Vagrant"
  focal_point: ""
  preview_only: false

projects: []
---

The network configuration provided by Vagrant is not transparent and may take new users by surprise.

## What is **Vagrant**?

[Vagrant] is a program created by [HashiCorp] that allows you to generate _environments_ for development or testing in a fast, efficient, and reproducible way.
These _environments_ are commonly virtual machines, although nowadays containers can also be created to test software more agilely.

Vagrant can be defined as a _meta manager_ because it communicates with programs that manage virtual machines or containers, coordinates their execution, and provides a standard interface to interact with the _environments_ regardless of the underlying technology or the host operating system.

### **Vagrant** Configuration

Vagrant refers to the virtual machines or containers it runs as _boxes_.
The configuration of each _box_ is defined in a file called [`Vagrantfile`][vagrantfile], which uses the [Ruby] programming language.
This post focuses on using Vagrant with virtual machines.

## What providers exist in **Vagrant**?

[Vagrant providers][vagrant-providers] are the programs capable of running virtual machines and containers (_boxes_) on the host system.
Vagrant coordinates the execution of _boxes_ through each _provider_.

The following providers are included:

- [VirtualBox] for GNU/Linux, macOS, and Windows
- [Docker] for GNU/Linux, macOS, and Windows
- [Hyper-V] for Windows

Other additional providers include:

- [VMware][vagrant-vmware] for Workstation (Linux / Windows) or Fusion (macOS)
- [LXC][vagrant-lxc] for GNU/Linux
- [libvirt][vagrant-libvirt] for GNU/Linux

### Installing **Vagrant**

Vagrant can run on GNU/Linux, macOS, and Windows.
A virtual machine or container manager must be installed on the host system before installing Vagrant.
This post assumes that [VirtualBox] is installed.

To install Vagrant, download the installer for your operating system:

- <https://www.vagrantup.com/downloads>

#### Debian GNU/Linux

To install it on [Debian], [Ubuntu], or derivatives, add the GPG key to validate packages:

```
# curl -fsSL https://apt.releases.hashicorp.com/gpg | apt-key add -
```

If `curl` is not installed, you can use `wget`:

```
# wget -qc -O - https://apt.releases.hashicorp.com/gpg | apt-key add -
```

Then add the `apt` repository. This can be done in two ways:

- Using `apt-add-repository`
- Editing the repository file manually

##### Using `apt-add-repository`

```
# apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
```

##### Editing the repository file

```
# echo "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main" > /etc/apt/sources.list.d/vagrant.list
```

Update the package list:

```
# apt -q update
```

Install `vagrant`:

```
# apt install vagrant
```

### First steps with **Vagrant**

The main way to interact with Vagrant is through the `vagrant` CLI tool.

#### Initialize a virtual machine configuration

Create an empty directory and initialize it with `vagrant init`:

```
$ mkdir alpine
$ cd alpine
$ vagrant init alpine/alpine64
```

This creates a `Vagrantfile` with the VM configuration:

```
$ egrep -v '^\s*(#|$)' Vagrantfile
Vagrant.configure("2") do |config|
  config.vm.box = "alpine/alpine64"
end
```

#### Launch the virtual machine

Use `vagrant up` to start the VM:

```
$ vagrant up
```

#### Inspect the VM configuration

Each VM has a name and a unique UUID.

```
$ vboxmanage list runningvms
```

Use the UUID to inspect details:

```
$ vboxmanage showvminfo <UUID>
```

#### Connect to the VM via **SSH**

```
$ vagrant ssh
```

This connects using the `vagrant` user and a generated SSH key pair.

#### VirtualBox kernel modules

You can verify whether VirtualBox guest utilities are installed:

```
alpine:~# lsmod | grep vbox
```

#### Shared `vagrant` folder

When the VM starts, the working directory is shared with the VM at `/vagrant` using [VirtualBox] shared folders:

```
==> default: Mounting shared folders...
    default: /vagrant => /private/tmp/alpine
```

Any file added to the working directory will automatically appear inside the VM.

Check mounted folders:

```
alpine:~# mount | egrep 'vagrant|vbox(sf)?'
```

#### Privilege escalation

The `vagrant` user can run `sudo` without a password:

```
alpine:~$ sudo -i
```

### Configuring VM parameters

Each [Vagrant provider][vagrant-providers] supports different parameters.
To change RAM or CPU count, edit the [`Vagrantfile`][vagrantfile]:

```
config.vm.provider "virtualbox" do |vb|
  vb.memory = 1024
  vb.cpus = 2
end
```

#### **VirtualBox**-specific configuration

Some parameters require `vboxmanage modifyvm`:

```
config.vm.provider "virtualbox" do |vb|
  vb.default_nic_type = "virtio"
  vb.customize ["modifyvm", :id, "--cpuexecutioncap", "99"]
  vb.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
end
```

[vagrant]: https://www.vagrantup.com/
[hashicorp]: https://www.hashicorp.com/
[vagrantfile]: https://www.vagrantup.com/docs/vagrantfile
[ruby]: https://www.ruby-lang.org/
[virtualbox]: https://www.virtualbox.org/
[vagrant-providers]: https://www.vagrantup.com/docs/providers
[hyper-v]: https://docs.microsoft.com/en-us/virtualization/community/team-blog/2017/20170706-vagrant-and-hyper-v-tips-and-tricks
[docker]: https://www.docker.io/
[vagrant-lxc]: https://github.com/fgrehm/vagrant-lxc
[vagrant-libvirt]: https://github.com/vagrant-libvirt/vagrant-libvirt
[vagrant-vmware]: https://github.com/hashicorp/vagrant-vmware-desktop
[Debian]: https://debian.org/
[Ubuntu]: https://ubuntu.com/
[debian-buster64]: https://app.vagrantup.com/debian/boxes/buster64
[debian-contrib-buster64]: https://app.vagrantup.com/debian/boxes/contrib-buster64
[vbox-guest-additions]: https://www.virtualbox.org/manual/ch04.html

