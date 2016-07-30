var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Result = React.createClass({

    render: function () {
        return (
            <div className="card card-block grey lighten-2">
                <p className="text-fluid" dangerouslySetInnerHTML={{__html:this.props.result.Result}}></p>
            </div>
        );
    }
});

module.exports = Result;