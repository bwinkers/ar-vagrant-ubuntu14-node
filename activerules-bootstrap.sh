#!/usr/bin/env bash

# Get root up in here
sudo su

# Just a simple way of checking if we need to install everything
if [ ! -d "/var/www" ]
then
    # Add MongoDB to apt
    apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
    echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/10gen.list

    # Update and begin installing some utility tools
    apt-get -y update
    apt-get -y dist-upgrade
    apt-get install -y python-software-properties
    apt-get install -y vim git subversion curl
    apt-get install -y memcached build-essential

    # Install latest stable version of MongoDB
    apt-get install -y mongodb-10gen

    # Add nodejs repo
    curl -sL https://deb.nodesource.com/setup | sudo bash -

    # Install nodejs and npm 
    apt-get install -y nodejs 

    # Install Grunt command line (cli)
    npm install -g grunt-cli

    # Change to the webroot and install the application dependencies
    npm install --prefix /vagrant/www/default /vagrant/www/default

    # Install the 
    grunt --base /vagrant/www/default --gruntfile /vagrant/www/default/Gruntfile.js init:dev

    # Run a little cleanup
    apt-get -y autoremove

    # Symlink our host www to the guest /var/www folder
    ln -s /vagrant/www /var/www

    # Success!
    echo "VM created successfully! For code, see: ar-vagrant-ubuntu14-node/www/default/server.js."
    echo ""
    echo "It is recommended to start the server in an interactive shell."
    echo ""
    echo "In the project root where the Vagrantfile is located type the following to open a shell on the VM"
    echo "vagrant ssh"
    echo ""
    echo "Then start the server using this command:"
    echo "grunt --base /vagrant/www/default --gruntfile /vagrant/www/default/Gruntfile.js server"
    echo ""
    echo "To restart the service type from the shell:"
    echo "rs"

    # Run it
    # grunt --base /vagrant/www/default --gruntfile /vagrant/www/default/Gruntfile.js server
fi
