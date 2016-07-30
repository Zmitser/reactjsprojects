var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var EditForm = React.createClass({
    render: function () {
        return (
            <div className="card card-block">
                <h3>Edit Contact</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="md-form form-group">
                        <input type="text" id="name" ref="name" onChange={this.handleChange.bind(this, 'name')}
                               value={this.props.contactToEdit.name} className="form-control validate"/>
                    </div>
                    <div className="md-form form-group">
                        <input type="text" id="phone" ref="phone" onChange={this.handleChange.bind(this, 'phone')}
                               value={this.props.contactToEdit.phone} className="form-control validate"/>
                    </div>
                    <div className="md-form form-group">
                        <input type="email" id="email" ref="email" onChange={this.handleChange.bind(this, 'email')}
                               value={this.props.contactToEdit.email} className="form-control validate"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    },
    handleChange: function (fieldName, event) {
        var newState = event.target.value;
        var selected = this.state.selected;
        selected.name = newState;
        this.setState({selected: selected})
    },

    handleSubmit: function (e) {
        e.preventDefault();
        var contact = {
            id: this.props.contactToEdit.id,
            name: this.refs.name.value.trim(),
            phone: this.refs.phone.value.trim(),
            email: this.refs.email.value.trim()

        };
        AppActions.updateContact(contact);
    }

});
module.exports = EditForm;

