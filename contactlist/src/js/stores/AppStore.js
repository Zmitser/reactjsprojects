var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _contacts = [];

var _contact_to_edit = '';

var AppStore = assign({}, EventEmitter.prototype, {
    getContacts: function () {
        return _contacts;
    },
    setContacts: function (contacts) {
        _contacts = contacts;
    },

    setContactToEdit: function (contact) {
        _contact_to_edit = contact;
    },

    getContactToEdit: function () {
        return _contact_to_edit;
    },

    saveContact: function (contact) {
        _contacts.push(contact);
    },

    updateContact: function (contact) {
        var index = _contacts.findIndex(x => x.id === contact.id);
        _contacts[index] = contact;
    },
    removeContact: function (contactId) {
        var index = _contacts.findIndex(x => x.id === contactId);
        _contacts.splice(index, 1);
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on('change', callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.actionType) {
        case AppConstants.SAVE_CONTACT:
            //Store save
            AppStore.saveContact(action.contact);

            //Save to API
            AppAPI.saveContact(action.contact);

            //Emit Change
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.RECEIVE_CONTACT:
            //Store save
            AppStore.setContacts(action.contacts);
            //Emit Change
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.REMOVE_CONTACT:
            //Store save
            AppStore.removeContact(action.contactId);
            //API remove
            AppAPI.removeContact(action.contactId);
            //Emit Change
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.EDIT_CONTACT:
            AppStore.setContactToEdit(action.contact);
            //Emit Change
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.UPDATE_CONTACT:
            //Store update
            AppStore.updateContact(action.contact);
            //API update
            AppAPI.updateContact(action.contact);
            //Emit Change
            AppStore.emit(CHANGE_EVENT);
            break;
    }

    return true;
});

module.exports = AppStore;