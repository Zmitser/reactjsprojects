var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Movie = React.createClass({
    render: function () {
        var link = 'http://www.imdb.com/title/' + this.props.movie.imdbID;
        return (
            <div className="card card-block" style={{background: '#999'}}>
                <div className="row">
                    <div className="col-md-5">
                        <img src={this.props.movie.Poster} alt="Poster" className="img-thumbnail img-fluid"/>
                    </div>
                    <div className="col-md-7">
                        <h4>{this.props.movie.Title}</h4>
                        <ul className="list-group">
                            <li className="list-group-item">Year Released: {this.props.movie.Year}</li>
                            <li className="list-group-item">IMDB ID: {this.props.movie.imdbID}</li>
                        </ul>
                        <a href={link} className="btn btn-primary">View on IMDB</a>
                    </div>
                </div>
            </div>
        )
    }
});
module.exports = Movie;

/**
 * Created by Lenovo on 29.07.2016.
 */
