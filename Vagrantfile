# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

	# We will be using ubuntu 14.04 64-bit
	config.vm.box = "ubuntu/trusty64"
	
	# Port 8080 is to be used for an HTTP server
	# Port 8081 is to be used for access to MongoDB listening port
	# Port 9081 is to be used for MongoDB HTTP interface
	config.vm.network "forwarded_port", guest: 8080, host: 8080
	config.vm.network "forwarded_port", guest: 8081, host: 8081
	config.vm.network "forwarded_port", guest: 9081, host: 9081
	
	# Virtualbox specific settings
	config.vm.provider "virtualbox" do |vb|
		# Allocate 2048 or 2GB of memory for virtual machine
		vb.customize ["modifyvm", :id, "--memory", "2048"]
	end
end
