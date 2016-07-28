import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';

class App extends Component{

    constructor(props){
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

    render(){
        return (
            <div>
                <QuestionList {...this.state}/>
            </div>
        )
    }
}

export default App;