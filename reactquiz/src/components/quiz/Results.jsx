import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Results extends Component {


    render() {
        var percent = (this.props.score / this.props.questions.length * 100);
        if (percent > 80) {
            var message = 'Awesome Job!'
        } else if (percent < 80 && percent > 60) {
            var message = 'You did Ok!'
        } else {
            var message = 'You did horrible!'
        }
        return (
            <div className="card" style={{backgroundColor: '#888', borderColor: "#333"}}>
                <h4>You got {this.props.score} out of {this.props.questions.length} Correct!</h4>
                <h1>{percent}% - {message}</h1>
                <hr/>
                <a href="/app">Take Again!</a>
            </div>
        )
    }
}

export default Results;