import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';

class App extends  Component {
    constructor(props){
        super(props);
        this.state = {
            username: "Zmitser",
            userData: [],
            userRepos: [],
            perPage: 5
        }
    }


    getUserData(){
        $.ajax({
            url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({userData: data});
                console.log(data);
            }.bind(this),
            error: function (xhr, status, err) {
                this.setState({username: null});
                alert(err)
            }.bind(this)
        })
    }

    componentDidMount(){
        this.getUserData();
    }

    render(){
        return(
            <div>
                <Profile userData={this.state.userData}/>
            </div>
        )
    }
}
App.propTypes = {
    clientId : React.PropTypes.string,
    clientSecret: React.PropTypes.string
};

App.defaultProps = {
    clientId: 'f6cb66405fe55aa7bc2b',
    clientSecret: '592b67322b1836f79bfb54a829af70ccaa57eb74'
};

export default App;