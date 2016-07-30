var Firebase = require('firebase/app');
require('firebase/database');
var AppActions = require('../actions/AppActions');

var config ={
    databaseURL:  'https://contactlist-b93d7.firebaseio.com'
};
Firebase.initializeApp(config);
