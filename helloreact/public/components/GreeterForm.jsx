var React = require('react');

var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var updates = {};
        var name = this.refs.name.value.trim();
        var message = this.refs.message.value.trim();
        if (name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
        }
        if (message.length > 0) {
            this.refs.message.value = '';
            updates.message = message;
        }
        this.props.onNewData(updates);
    },

    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="name" placeholder="Enter something what you want..."/>
                    <br/>
                    <textarea name="message" id="message" cols="21" rows="5" ref="message" /><br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
});

module.exports = GreeterForm;
