---
title: Ansible para un mundo mejor
subtitle: Automatización de sistemas y configuraciones mediante Ansible
summary: Ansible es una herramienta que permite automatizar la configuración de sistemas y aplicaciones, facilitando la administración de infraestructuras.
authors: ["quique"]
tags: ["Software Libre,  Linux,  Sysadmin,  Ansible, Automatización, Infraestructura"]
categories: []
date: 2024-09-14T12:53:44-05:00
lastmod: 2024-09-14T12:53:44-05:00
featured: false
draft: false
image:
  caption: ""
  focal_point: ""
  preview_only: true

projects: []

---

El día de hoy pensaba, de que podría ser este post, quería compartir alguna tecnología que me hubiera realmente ayudado a realizar las cosas que me gustan, algo que sin darme cuenta se volvió parte de mi flujo de trabajo por lo bueno que es. Y es por eso que hoy les quiero hablar de Ansible.

## ¿Qué es Ansible?

Según [Red Hat](https://www.redhat.com/es/topics/automation/learning-ansible-tutorial), "Ansible es un motor open source que automatiza una gran cantidad de procesos informáticos, como la preparación de la infraestructura, la gestión de la configuración, la implementación de las aplicaciones y la organización de los sistemas."

¿¿Pero qué es esto??

Básicamente es como juntar los shell scripts que los sysadmin llevan haciendo por años, con la facilidad de uso de un lenguaje de programación, y la capacidad de ejecutarlos en múltiples servidores al mismo tiempo.

## ¿Para qué sirve Ansible?

El poder de Ansible se encuentra en la automatización de tareas, instalar, configurar, actualizar, y mantener servidores y aplicaciones son tareas que se pueden realizar con un solo comando.

Imagina que tiene que configurar 2 máquinas con la misma configuración, ¿se vuelve tedioso no? Ahora imagina que son 100 máquinas, o 1000, o 10000, ¿se vuelve imposible no? Con Ansible, solo necesitas escribir una vez la configuración y podrás aplicarla a todas las máquinas que necesites sabiendo que todas tendrán la misma configuración.

Y no solo eso, que pasa con tu máquina principal, que tal si cambias, o tienes que reinstalar, ¿tendrás que volver a configurar todo? Con Ansible, solo necesitas ejecutar el playbook y tu máquina quedará configurada como la necesitas.

## ¿Cómo funciona Ansible?

Ansible funciona mediante la definición de playbooks, que son archivos escritos en YAML que contienen las tareas que se deben realizar en los servidores. Estos playbooks se ejecutan mediante el comando `ansible-playbook` y se pueden ejecutar en uno o varios servidores al mismo tiempo.

Todo lo puedes revisar en la [documentación oficial](https://docs.ansible.com/ansible/latest/index.html). Si quieres aprender más sobre Ansible, te recomiendo que realices los ejemplos de la documentación, te aseguro que pronto notarás que no solo se trata de sysadmin.

## Conclusión

Ansible me gusta, facilita muchas cosas y te asegura que estas haciendo todo con orden, dejando un registro y que si en cualquier momento algo truena lo podrás volver a levantar.

Recuerden hacer backups, comer rico y dormir bien. c;
