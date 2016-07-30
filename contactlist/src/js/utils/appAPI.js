var Firebase = require('firebase/app');
require('firebase/database');
var AppActions = require('../actions/AppActions');
require('../components/FbApp');

module.exports = {
    saveContact: function (contact) {
        var firebaseRef = Firebase.database().ref('/contacts');
        firebaseRef.push({
            contact: contact
        })
    },

    getContacts: function () {
        var firebaseRef = Firebase.database().ref('/contacts');
        firebaseRef.once("value", function (snapshot) {
            var contacts = [];
            snapshot.forEach(function (childSnapshot) {
                var contact = {
                    id: childSnapshot.key,
                    name: childSnapshot.val().contact.name,
                    phone: childSnapshot.val().contact.phone,
                    email: childSnapshot.val().contact.email

                };
                contacts.push(contact);
                AppActions.receiveContacts(contacts);
            })
        })
    },
    removeContact: function (contactId) {
        var firebaseRef = Firebase.database().ref('/contacts/' + contactId);
        firebaseRef.remove();
    },

    updateContact: function (contact) {
        var id = contact.id;
        var updateContact = {
            name: contact.name,
            phone: contact.phone,
            email: contact.email
        };
        var firebaseRef = Firebase.database().ref('/contacts/' + id + '/contact');
        firebaseRef.update(updateContact);
    }
};
