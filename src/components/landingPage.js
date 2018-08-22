import React from 'react';

import './landingPage.css';


export default class Landing extends React.Component {
    constructor(props) {
        super(props)
    }
    goToLogin(event) {
        event.preventDefault();
        this.props.history.push(`/login`);
    }

    render() {
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
