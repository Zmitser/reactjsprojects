var ReactDOM = require('react-dom');
var React = require('react');
var Greeter = require('Greeter');
var firstName = "Zmitser ";
ReactDOM.render(
    <Greeter name={firstName}/>,
    document.getElementById('app')
);