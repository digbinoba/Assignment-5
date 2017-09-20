//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://digbinoba:maximus1@ds141534.mlab.com:41534/delano1', //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: 'AIzaSyAE87Pd5PQdJmwGrZ9FXF7WYyxvImyURc8'
  },
  port: 8080
};