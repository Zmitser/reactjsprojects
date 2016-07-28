import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx'

class Scorebox extends Component {


    render() {
        return (
            <div className="card" style={{backgroundColor: '#888', borderColor: "#333"}}>
                    Question: {this.props.current} out of {this.props.questions.length} <span className="pull-md-right"><strong>This score: {this.props.score}</strong></span>
            </div>
        )
    }
}

export default Scorebox;