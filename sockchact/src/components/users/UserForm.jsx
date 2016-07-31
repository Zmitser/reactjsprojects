import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class UserForm extends Component {

    render() {
        return (
            <div>
                <h3>Chat Login</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="md-form">
                        <input type="text" id="username" ref="name" className="form-control"/>
                        <label htmlFor="username">Please, choose a username</label>
                    </div>
                </form>
            </div>
        )
    }

    onSubmit(e){
        e.preventDefault();
        var name = this.refs.name.value.trim();
        this.props.setUser({name: name});
        this.props.emit('userJoined', {name: name});
        this.refs.name.value = '';
    }
}

export default UserForm;