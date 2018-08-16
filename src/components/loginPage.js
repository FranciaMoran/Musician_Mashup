import React from 'react';

import './loginPage.css';

export default class Login extends React.Component {
    goToCreateAccount(event) {
        event.preventDefault();
        this.props.history.push(`/createAccount`);
    }

    render() {
        return (
            <div>
            <h1 id="login-title">Login</h1>
            <form id="login-inputs">
    <div id="username-input">
    <label>Username:</label>
    <input type="text"></input>
    </div>
    <div id="password-input">
    <label>Password:</label>
    <input type="text"></input>
    </div>
  <button>Submit</button>
  </form>
  <button id="create-new-account-button" onClick={e => this.goToCreateAccount(e)}>Create a new account</button>
  </div>
        );
    }
}