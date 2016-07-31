import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Message extends Component {


    render() {
        var formattedTime = this.formatTime(this.props.message.timestamp);
        return (
            <div className="message">
                <div className="blockquote">
                    <p className="m-b-0">{formattedTime} - {this.props.message.text}</p>
                    <footer className="blockquote-footer">{this.props.message.user}</footer>
                </div>
            </div>
        )
    }

    formatTime(timestamp) {
        var dt = new Date(timestamp * 1000);
        var hours = dt.getHours();
        var minutes = dt.getMinutes();
        var seconds = dt.getSeconds();

        if (hours < 10) {
            hours = '0' + hours;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        return hours + ':' + minutes + ':' + seconds;
    }
}

export default Message;
