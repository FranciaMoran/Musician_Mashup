import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import './landingPage.css';
import LoginForm from './loginForm';
import {connect} from 'react-redux';

export class LandingPage extends React.Component {
     goToLogin(event) {
        event.preventDefault();
        this.props.history.push(`/loginscreen`);
    }
   
   render() {
    console.log(this.props.loggedIn)
    if (this.props.loggedIn) {
        this.props.history.push(`/dashboard`);
    }
    return (
        <div>
            <div id="landing-page">
                <h1 id="name-of-app">Musician Mashup</h1>
                <h2 id="slogan">Get in contact with musicians to form a band with today!</h2>
                    <p id="app-explained">Musician Mashup is a networking app which allows musicians to meet new people to jam with. As a user, you can create a personal profile and add members to a new band or you can join existing groups.</p>
                    <button id="get-started-button" onClick={e => this.goToLogin(e)}>Get Started!</button>
                    </div>
            </div>
    );
}
}


const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);



