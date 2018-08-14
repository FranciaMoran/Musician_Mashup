import React from 'react';

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="landing-page">
                <h1>Musician Mashup</h1>
                <h2>Get in contact with musicians to form a band today!</h2>
                    <p>Musician Mashup is a networking app which allows musicians to meet new people to jam with. As a user, you can create a personal profile and add members to a new band or you can join existing groups.</p>
                    <button id="get-started-button">Get Started!</button>
                <h3 id="demo-login">Demo Login</h3>
                    <p id="demo-login-description">You can use this login to see an example of a profile and the home dashboard.</p>
                    <ul>
                        <li>Username: blank</li>
                        <li>Password: blank</li>
                    </ul>
            </div>
        );
    }
}
/*
<body>
    <h1 id="name-of-app">Musician Mashup</h1>
    <main>
    <h2 id="slogan">Get in contact with musicians to form a band with today!</h2>
    <p id="app-explained">Musician Mashup is a networking app which allows musicians to meet new people to jam with. As a user, you can create a personal profile and add members to a new band or you can join existing groups.</p>
    <button id="get-started-button">Get Started!</button>
    <h3 id="demo-login">Demo Login</h3>
    <p id="demo-login-description">You can use this login to see an example of a profile and the home dashboard.</p>
    <ul>
      <li class="li">Username: blank</li>
      <li class="li">Password: blank</li>
    </ul>
    </main>
  </body> */