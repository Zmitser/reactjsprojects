var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var SearchForm = React.createClass({
    render: function () {
        return (
            <div className="card card-block grey lighten-2">
                <form onSubmit={this.searchText}>
                    <div className="md-form">
                        <input type="text" id="search" ref="text" className="form-control"/>
                        <label htmlFor="search" className="">Search For Something</label>
                    </div>
                </form>
            </div>
        );
    },
    
    
    searchText: function (e) {
        e.preventDefault();
        var search = {
            text: this.refs.text.value.trim()
        };

        AppActions.searchText(search)


    }

});

module.exports = SearchForm;
