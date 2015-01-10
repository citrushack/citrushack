MONGO_LOG='/var/log/mongodb'
MONGO_DB='/opt/citrushack_db'

# Update package repositories
echo 'Updating package repositories...'
sudo apt-add-repository "deb http://archive.ubuntu.com/ubuntu $(lsb_release -sc) main universe restricted multiverse"
sudo apt-get update
echo 'Done updating package repositories'

# Prerequisite tools 
echo 'Installing prerequisite tools...'
sudo apt-get install -y build-essential git
echo 'Finished installing prerequisites'

# Install node and npm from source
echo 'Installing node and npm...'
sudo apt-get install -y nodejs npm
# Create alias for node -> nodejs
echo 'alias node="nodejs"' >> ~/.bashrc
. ~/.bashrc
# Create a symlink for /usr/bin/nodejs -> /usr/bin/node
# needed so some node applications work properly
sudo ln -s /usr/bin/nodejs /usr/bin/node
echo 'Done installing node and npm'

# Install global node modules
echo 'Installing bower, nodemon, gulp, and mocha'
sudo npm install -g bower nodemon gulp mocha
echo 'Done installing bower, nodemon, gulp, and mocha'

# Install mongodb
# Following the directions from the offical site found
# here
# http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/
echo 'Installing mongodb'
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update
sudo apt-get install -y mongodb-org
echo 'Done installing mongodb'

# Setup DB paths and setting permissions
echo 'Creating DB paths and setting permissions...'
# Make sure mongo daemon has not already started
# if so, stop daemon
sudo service mongod stop
sudo mkdir -p $MONGO_LOG
sudo chown -R 'vagrant' $MONGO_LOG
sudo mkdir -p $MONGO_DB
sudo chown -R 'vagrant' $MONGO_DB
echo 'Done setting up mongodb'

