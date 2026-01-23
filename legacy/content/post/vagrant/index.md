---

title: "Vagrant"
summary: "Vagrant: meta manejador de máquinas virtuales y contenedores"
authors: [tonejito]
tags: [open source, blog, post, vagrant, virtual machine, virtualbox, linux, macos]
categories: []
date: 2021-07-23T13:14:15-05:00
lastmod: 2019-07-23T14:15:16-05:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: "Vagrant"
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

La configuración de red que nos da Vagrant no es transparente y puede tomar por sorpresa a nuevos usuarios.

## ¿Qué es **Vagrant**?

[Vagrant] es un programa hecho por [HashiCorp] que permite generar _ambientes_ para desarrollo o pruebas de una manera rápida, eficaz y reproducible.
Estos _ambientes_ comúnmente son máquinas virtuales, aunque en la actualidad se pueden generar contenedores para probar nuestro software de una manera más ágil.

Se puede definir a Vagrant como un _meta manejado_, porque se comunica con los programas que manejan las máquinas virtuales o contenedores, coordina su ejecución y brinda una interfaz estándar para interactuar con los _ambientes_ sin importar la tecnología sobre la que se monten ni el sistema operativo anfitrión que se tenga en el equipo físico.

### Configuración de **Vagrant**

Vagrant denomina a las máquinas virtuales o contenedores que va a ejecutar como _cajas_ (boxes).
La configuración de cada _caja_ está definida en un archivo llamado [`Vagrantfile`][vagrantfile] que utiliza el lenguaje de programación [Ruby].
Esta publicación se centra en el uso de Vagrant con máquinas virtuales.

## ¿Qué proveedores existen en **Vagrant**?

Los [proveedores de vagrant][vagrant-providers] son los programas que pueden ejecutar máquinas virtuales y contenedores (denominados _cajas_ o _boxes_) dentro del equipo físico.
Vagrant coordina la ejecución de las _cajas_ a través de cada _proveedor_.

Los siguientes proveedores vienen incluidos:

- [VirtualBox] para GNU/Linux, macOS y Windows
- [Docker] para GNU/Linux, macOS y Windows
- [Hyper-V] para Windows

Existen otros proveedores adicionales como:

- [VMware][vagrant-vmware] para Workstation (Linux / Windows) o Fusion (macOS)
- [LXC][vagrant-lxc] para GNU/Linux
- [libvirt][vagrant-libvirt] para GNU/Linux

<!-- TODO: Tabla de proveedores y plataformas -->

### Instalación de **Vagrant**

Vagrant puede ejecutarse en GNU/Linux, macOS y Windows.
Debe existir algún programa manejador de máquinas virtuales o contenedores instalado en el equipo físico antes de que Vagrant pueda ser instalado.
Esta publicación asume que [VirtualBox] está instalado en el equipo.

Para instalar Vagrant se debe descargar el programa de instalación para el sistema operativo que se tenga en el equipo físico.

- <https://www.vagrantup.com/downloads>

#### Debian GNU/Linux

Para instalarlo en [Debian], [Ubuntu] o derivados, se agrega la llave GPG para validar los paquetes.

```
# curl -fsSL https://apt.releases.hashicorp.com/gpg | apt-key add -
```

En caso de no tener `curl` instalado, esto también se puede hacer con `wget`.

```
# wget -qc -O - https://apt.releases.hashicorp.com/gpg | apt-key add -
```

Después se agrega el repositorio de `apt`.
Esto se puede hacer de dos maneras diferentes:

- Utilizando el programa `apt-add-repository`
- Editando el archivo de repositorio

##### Utilizando `apt-add-repository`

```
# apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
```

##### Editando el archivo de repositorio

```
# echo "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main" > /etc/apt/sources.list.d/vagrant.list
```

Después de agregar la configuración del repositorio, se actualiza la lista de paquetes disponibles.

```
# apt -q update
	...
Get:5 https://apt.releases.hashicorp.com buster InRelease [4421 B]
Get:6 https://apt.releases.hashicorp.com buster/main amd64 Packages [28.4 kB]
	...
```

Una vez actualizada la lista de paquetes, se instala `vagrant` con `apt`.

```
# apt install vagrant
```

### Primeros pasos con **Vagrant**

El mecanismo principal de interacción con Vagrant es utilizando la herramienta de línea de comandos `vagrant`.

#### Inicializar la configuración de la máquina virtual

Para lanzar una instancia de una máquina virtual se crea un directorio vacío y se inicializa la configuración utilizando el comando `vagrant init`.

```
$ mkdir alpine
$ cd alpine
$ vagrant init alpine/alpine64
A `Vagrantfile` has been placed in this directory.
You are now ready to `vagrant up` your first virtual environment!
Please read the comments in the Vagrantfile as well as documentation on
`vagrantup.com` for more information on using Vagrant.
```

Esto crea el archivo `Vagrantfile` con la configuración de la máquina virtual.

```
$ ls -lA
total 4
-rw-r--r-- 1 tonejito wheel 3021 Jul 23 16:04 Vagrantfile
```

El archivo de configuración contiene muchos comentarios, pero esencialmente tiene la información de la imágen que se usa para ejecutar la instancia de la máquina virtual:

```
$ egrep -v '^\s*(#|$)' Vagrantfile
Vagrant.configure("2") do |config|
  config.vm.box = "alpine/alpine64"
end
```

#### Lanzar la máquina virtual

Se utliza el comando `vagrant up` para ejecutar la máquina virtual en el equipo.

```
$ vagrant up
Bringing machine 'default' up with 'virtualbox' provider...
==> default: Importing base box 'alpine/alpine64'...
==> default: Matching MAC address for NAT networking...
==> default: Checking if box 'alpine/alpine64' version '3.7.0' is up to date...
==> default: Setting the name of the VM: alpine_default_1627074511092_9334
==> default: Fixed port collision for 22 => 2222. Now on port 2201.
==> default: Clearing any previously set network interfaces...
==> default: Preparing network interfaces based on configuration...
    default: Adapter 1: nat
==> default: Forwarding ports...
    default: 22 (guest) => 2201 (host) (adapter 1)
==> default: Booting VM...
==> default: Waiting for machine to boot. This may take a few minutes...
    default: SSH address: 127.0.0.1:2201
    default: SSH username: vagrant
    default: SSH auth method: private key
    default: Warning: Connection reset. Retrying...
    default: Warning: Remote connection disconnect. Retrying...
    default:
    default: Vagrant insecure key detected. Vagrant will automatically replace
    default: this with a newly generated keypair for better security.
    default:
    default: Inserting generated public key within guest...
    default: Removing insecure key from the guest if it's present...
    default: Key inserted! Disconnecting and reconnecting using new SSH key...
==> default: Machine booted and ready!
==> default: Checking for guest additions in VM...
    default: The guest additions on this VM do not match the installed version of
    default: VirtualBox! In most cases this is fine, but in rare cases it can
    default: prevent things such as shared folders from working properly. If you see
    default: shared folder errors, please make sure the guest additions within the
    default: virtual machine match the version of VirtualBox you have installed on
    default: your host and reload your VM.
    default:
    default: Guest Additions Version: 5.1.30 r118389
    default: VirtualBox Version: 6.1
==> default: Mounting shared folders...
    default: /vagrant => /private/tmp/alpine
```

##### Inspeccionar la configuración de la máquina virtual

Se puede inspeccionar la configuración de la máquina virtual desde la consola de VirtualBox o bien desde la línea de comandos.
Cada máquina virtual tiene un nombre y un identificador único UUID.

```
$ vboxmanage list runningvms
"alpine_default_1627074511092_9334" {de2d1bd5-55b7-430c-8471-391e59266618}
```

Se puede utilizar el UUID para inspeccionar la configuración de la máquina virtual.

```
$ export VM_UUID=de2d1bd5-55b7-430c-8471-391e59266618

$ vboxmanage showvminfo ${VM_UUID}
Name:                        alpine_default_1627074511092_9334
Groups:                      /
Guest OS:                    Linux 2.6 / 3.x / 4.x (64-bit)
UUID:                        de2d1bd5-55b7-430c-8471-391e59266618
Config file:                 /Users/tonejito/VirtualBox VMs/alpine_default_1627074511092_9334/alpine_default_1627074511092_9334.vbox
Snapshot folder:             /Users/tonejito/VirtualBox VMs/alpine_default_1627074511092_9334/Snapshots
Log folder:                  /Users/tonejito/VirtualBox VMs/alpine_default_1627074511092_9334/Logs
Hardware UUID:               de2d1bd5-55b7-430c-8471-391e59266618
Memory size:                 512MB
	...
Number of CPUs:              1
	...
State:                       running (since 2021-07-23T21:08:35.757000000)
	...
SATA (0, 0): /Users/tonejito/VirtualBox VMs/alpine_default_1627074511092_9334/box-disk001.vmdk (UUID: c701a19a-32f3-4b96-8fe6-70c6ac13d987)
NIC 1:                       MAC: 0800279E9EE5, Attachment: NAT, Cable connected: on, Trace: off (file: none), Type: 82545EM, Reported speed: 0 Mbps, Boot priority: 0, Promisc Policy: deny, Bandwidth group: none
NIC 1 Settings:  MTU: 0, Socket (send: 64, receive: 64), TCP Window (send:64, receive: 64)
NIC 1 Rule(0):   name = ssh, protocol = tcp, host ip = 127.0.0.1, host port = 2201, guest ip = , guest port = 22
NIC 2:                       disabled
NIC 3:                       disabled
NIC 4:                       disabled
	...

Shared folders:

Name: 'vagrant', Host path: '/private/tmp/alpine' (machine mapping), writable

	...
```

#### Conectarse a la máquina virtual mediante **SSH**

Para establecer una conexión a la máquina virtual se ejecuta el comando `vagrant ssh`.
Esto hace una conexión mediante SSH con el usuario `vagrant` y un par de llaves SSH generado específicamente para conectarse a esta máquina virtual.

```
$ vagrant ssh

	...

alpine:~$
```

#### Módulos de kernel de VirtualBox

Las máquinas virtuales de Vagrant pueden tener instaladas las utilerías de VirtualBox para hacer que la experiencia de uso sea mejor.
Se puede verificar que la máquina virtual tiene los módulos de kernel que forman parte de la [utilerías de VirtualBox][vbox-guest-additions].

```
alpine:~# lsmod | grep vbox
vboxsf                 43377  1
vboxguest             287321  1 vboxsf
```

La manera de instalar y configurar las utilerías de VirtualBox queda fuera del alcance de esta publicación.

#### Carpetas compartidas de `vagrant`

Al iniciar la máquina virtual una de las últimas operaciones que se realizan es compartir la el directorio actual de trabajo con la máquina virtual.
Este directorio se monta en la ruta `/vagrant` utilizando la funcionalidad de carpetas compartidas de [VirtualBox] y resulta súmamente útil para ambientes de desarrollo o pruebas.

```
==> default: Mounting shared folders...
    default: /vagrant => /private/tmp/alpine
```

Cualquier archivo que se agregue a la carpeta de trabajo se compartirá de manera _automágica_ con la máquina virtual.
No todas las máquinas virtuales soportan esta funcionalidad, ej. la imágen mínima de Debian [`debian/buster64`][debian-buster64] no tiene instaladas las utilerías de VirtualBox, pero hay una imágen un poco más grande que si las tiene ([`debian/contrib-buster64`][debian-contrib-buster64]).

Si se tiene el siguiente _script_ en la carpeta de trabajo `~/Documents/vagrant/alpine`.

```
tonejito@equipo-fisico:~$ cat hola.sh
#!/bin/sh

cat << EOF
¡Hola mundo!
Mi plataforma actual es:
$(uname -a)
EOF
```

Después de entrar a la máquina virtual ejecutando `vagrant ssh` se puede listar el contenido del directorio `/vagrant` y ejecutar el _script_.

```
alpine:~$ ls -lA /vagrant
total 8
drwxr-xr-x    1 root     root           128 Jul 23 21:08 .vagrant
-rw-r--r--    1 root     root          3064 Jul 23 21:25 Vagrantfile
-rwxr-xr-x    1 root     root            99 Jul 23 21:47 hola.sh

alpine:~$ /vagrant/hola.sh
¡Hola mundo!
Mi plataforma actual es:
Linux alpine 4.9.73-0-virthardened #1-Alpine SMP Tue Jan 2 16:48:59 UTC 2018 x86_64 Linux
```

Se puede verificar si la máquina virtual tiene montada la carpeta compartida de `vagrant` con el siguiente comando.

```
alpine:~# mount | egrep 'vagrant|vbox(sf)?'
vagrant on /vagrant type vboxsf (rw,nodev,relatime)
```

#### Elevación de privilegios

El usuario `vagrant` puede ejecutar el comando `sudo` para elevar privilegios a `root` sin necesidad de introducir una contraseña.

```
alpine:~$ whoami
vagrant

alpine:~$ sudo -i

alpine:~# whoami
root
```

### Configuración de parámetros de la máquina virtual

Cada [proveedor de vagrant][vagrant-providers] tiene distintos parámetros para configurar los attributos específicos del manejador de máquinas virtuales o contenedores.
Para cambiar la cantidad de memoria RAM o número de vCPU que tiene la máquina virtual se edita el archivo [`Vagrantfile`][vagrantfile].

```
  config.vm.provider "virtualbox" do |vb|
    # Customize the amount of memory on the VM
    vb.memory = 1024

    # Set the number of vCPUs in the VM
    vb.cpus = 2
  end
```

#### Configuración específica de **VirtualBox**

Existen ciertos parámetros de configuración que son específicos del proveedor (en este caso VirtualBox) y deben ser configurados utilizando llamadas a [`vboxmanage modifyvm`][virtualbox-vboxmanage].

[virtualbox-vboxmanage]: https://www.virtualbox.org/manual/ch08.html#vboxmanage-modifyvm

```
  config.vm.provider "virtualbox" do |vb|
    #	...

    # Set default nic type
    vb.default_nic_type = "virtio"

    # Set CPU execution cap
    vb.customize ["modifyvm", :id, "--cpuexecutioncap", "99"]

    # Enable DNS proxy in NAT mode
    vb.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
  end
```

--------------------------------------------------------------------------------

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
