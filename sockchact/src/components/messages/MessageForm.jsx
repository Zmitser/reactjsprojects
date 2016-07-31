import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class MessageForm extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="md-form">
                        <input type="text" id="search" ref="text" className="form-control"/>
                        <label htmlFor="search" className="">Please, type a message</label>
                    </div>
                </form>
            </div>
        )
    }

    onSubmit(e){
        e.preventDefault();
        this.props.emit('messageAdded', {
            timestamp: Date.now(),
            text: this.refs.text.value.trim(),
            user: this.props.user.name
        });
    //    Clear Form
        text: this.refs.text.value = ''
    }
}

export default MessageForm;