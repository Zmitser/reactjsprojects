import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {
                    id: 1,
                    text: 'What is your  name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Michael'
                        },
                        {
                            id: 'b',
                            text: 'Zmitser'
                        },
                        {
                            id: 'c',
                            text: 'Steven'
                        }
                    ],
                    correct: 'b'
                },

                {
                    id: 2,
                    text: 'What is your  mother\'s name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Lila'
                        },
                        {
                            id: 'b',
                            text: 'Sara'
                        },
                        {
                            id: 'c',
                            text: 'Lida'
                        }
                    ],
                    correct: 'c'
                },

                {
                    id: 3,
                    text: 'What is your  father\'s name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Bobby'
                        },
                        {
                            id: 'b',
                            text: 'Brad'
                        },
                        {
                            id: 'c',
                            text: 'Volodya'
                        }
                    ],
                    correct: 'c'
                },

                {
                    id: 4,
                    text: 'What is your  friend\'s name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'John'
                        },
                        {
                            id: 'b',
                            text: 'Paul'
                        },
                        {
                            id: 'c',
                            text: 'Jimmy'
                        }
                    ],
                    correct: 'a'
                }
            ],
            score: 0,
            current: 1
        }
    }

    setCurrent(current) {
        this.setState({current});
    }

    setScore(score) {
        this.setState({score});
    }

    render() {
        if (this.state.current <= this.state.questions.length) {
            var scorebox = <Scorebox {...this.state}/>
        } else {
            var scorebox = <Results {...this.state}/>;
        }
        return (
            <div>
                {scorebox}
                <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)}
                                              setScore={this.setScore.bind(this)}/>
            </div>


        )

    }
}

export default App;