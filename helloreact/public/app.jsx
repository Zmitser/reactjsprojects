var GreeterMessage = React.createClass({
    render: function () {
        var name = this.props.name;
        var message =  this.props.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
            </div>
        )
    }
});

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
                    <input type="text" ref="name" placeholder="Enter something..."/>
                    <br/>
                    <textarea name="message" id="message" cols="21" rows="5" ref="message" /><br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
});
var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: "Localhost!",
            message: "This is from a awesome component"
        }
    },
    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        }
    },

    handleNewData: function(updates){
        this.setState(updates)
    },
    render: function () {
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreeterMessage name={name} message={message} />
                <GreeterForm onNewData={this.handleNewData}/>
            </div>



        )
    }
});

var firstName = "Zmitser ";
ReactDOM.render(
    <Greeter name={firstName}/>,
    document.getElementById('app')
);