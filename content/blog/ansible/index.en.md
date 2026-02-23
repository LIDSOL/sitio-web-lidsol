---
title: Ansible for a Better World
excerpt: Ansible is a tool that allows you to automate the configuration of systems and applications, making infrastructure management easier.
authors: ["quique"]
date: "2024-09-14"
readTime: "5 min"
tags:
  - "Free Software"
  - "Linux"
  - "Sysadmin"
  - "Ansible"
  - "Automation"
  - "Infrastructure"
---

Today I was thinking about what this post could be about. I wanted to share some technology that has truly helped me do the things I enjoy, something that, without even realizing it, became part of my workflow because of how good it is. That’s why today I want to talk to you about Ansible.

## What is Ansible?

According to Red Hat, “Ansible is an open source engine that automates a wide variety of IT processes, such as infrastructure provisioning, configuration management, application deployment, and system orchestration.”

But what does that actually mean?

Basically, it’s like combining the shell scripts that sysadmins have been writing for years with the ease of use of a programming language and the ability to execute them across multiple servers at the same time.

## What is Ansible used for?

The power of Ansible lies in task automation. Installing, configuring, updating, and maintaining servers and applications are tasks that can be executed with a single command.

Imagine you need to configure two machines with the same setup. It becomes tedious, right? Now imagine it’s 100 machines, or 1,000, or 10,000. That would be nearly impossible. With Ansible, you only need to write the configuration once, and you can apply it to as many machines as needed, knowing they will all have the exact same setup.

And not only that—what about your main machine? What if you switch computers or need to reinstall your system? Would you have to configure everything again? With Ansible, you just run the playbook and your machine will be configured exactly the way you need it.

## How does Ansible work?

Ansible works by defining playbooks, which are files written in YAML that contain the tasks to be executed on servers. These playbooks are run using the `ansible-playbook` command and can be executed on one or multiple servers at the same time.

You can review everything in the official documentation. If you want to learn more about Ansible, I recommend going through the examples in the documentation. I assure you that you’ll soon notice it’s not just for sysadmins.

## Conclusion

I like Ansible. It makes many things easier and ensures you are doing everything in an organized way, leaving a record and allowing you to recover quickly if something breaks.

Remember to make backups, eat well, and get enough sleep.
