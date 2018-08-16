import React from 'react';

export default class Login extends React.Component {

    render() {
        return (
            <div>
            <h1 id="login-title">Login</h1>
    <div id="username-input">
    <label>Username:</label>
    <input type="text"></input>
    </div>
    <div id="password-input">
    <label>Password:</label>
    <input type="text"></input>
    </div>
  <button>Submit</button>
  <button id="create-new-account-button">Create a new account</button>
  </div>
        );
    }
}