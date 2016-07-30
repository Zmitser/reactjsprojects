var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var AddForm = React.createClass({

    render: function () {
        return (
            <div className="card card-block">
                <h3>Add Contact</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="md-form form-group">
                        <input type="text" id="name" ref="name" className="form-control validate"/>
                        <label htmlFor="name" data-error="wrong" data-success="right">Add contact name</label>
                    </div>
                    <div className="md-form form-group">
                        <input type="text" id="phone" ref="phone" className="form-control validate"/>
                        <label htmlFor="phone" data-error="wrong" data-success="right">Add Phone</label>
                    </div>
                    <div className="md-form form-group">
                        <input type="email" id="email" ref="email" className="form-control validate"/>
                        <label htmlFor="email" data-error="wrong" data-success="right">Add email</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    },

    handleSubmit: function (e) {
        e.preventDefault();
        var contact = {
            name: this.refs.name.value.trim(),
            phone: this.refs.phone.value.trim(),
            email: this.refs.email.value.trim()

        };
        AppActions.saveContact(contact);
    }

});

module.exports = AddForm;
