import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import MessageList from './messages/MessageList.jsx'
import Message from './messages/Message.jsx'
import MessageForm from './messages/MessageForm.jsx'
import UserForm from './users/UserForm.jsx'
import UserList from './users/UserList.jsx'

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            status: "disconnected!",
            messages: [{
                timestamp: Date.now(),
                text: 'Welcome to SockChat!'
            }],
            users: [],
            user: ''
        }
    };

    componentWillMount() {
        this.socket = io("http://localhost:3000");
        this.socket.on('connect', this.connect.bind(this));
        this.socket.on('disconnect', this.disconnect.bind(this));
        this.socket.on('messageAdded', this.onMessageAdded.bind(this));
        this.socket.on('userJoined', this.onUserJoined.bind(this));
    };

    connect() {
        this.setState({status: 'connected'});

    };

    disconnect(users) {
        this.setState({users: users});
        this.setState({status: 'disconnected'});

    };

    onMessageAdded(message) {
        this.setState({messages: this.state.messages.concat(message)});
    }
    onUserJoined(users){
        this.setState({users: users})
    }

    emit(eventName, payload) {
        this.socket.emit(eventName, payload);
    }

    setUser(user) {
        this.setState({user: user})
    }

    render() {
        if (this.state.user == '') {
            return (
                <UserForm emit={this.emit.bind(this)} setUser={this.setUser.bind(this)}/>
            )
        } else {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <UserList {...this.state} />
                        </div>
                        <div className="col-md-8">
                            <MessageList {...this.state} />
                            <MessageForm {...this.state} emit={this.emit.bind(this)}/>
                        </div>
                    </div>
                </div>
            )
        }


    }
}

export default App;