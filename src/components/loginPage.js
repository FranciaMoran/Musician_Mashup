import React from 'react';

import './loginPage.css';

import {login} from '../actions/auth';

import {Field, reduxForm, focus} from 'redux-form';

export class Login extends React.Component {

    goToCreateAccount(event) {
        event.preventDefault();
        this.props.history.push(`/createAccount`);
    }

    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }
     goToDashboard(event) {
        event.preventDefault();
        this.props.history.push(`/dashboard`);
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <div>
            <div id="login-page">
            <h1 id="login-title">Login</h1>
            <form className="login-inputs" 
            onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
    <div id="username-input">
    <label>Username:</label>
    <input type="text"></input>
    </div>
    <div id="password-input">
    <label>Password:</label>
    <input type="text"></input>
    </div>
  <button  onClick={e => this.goToDashboard(e)}>Submit</button>
  </form>
  <button id="create-new-account-button" onClick={e => this.goToCreateAccount(e)}>Create a new account</button>
  <h3 id="demo-login">Demo Login</h3>
                    <p id="demo-login-description">You can use this login to see an example of a profile and the home dashboard.</p>
                    <ul>
                        <li className="li">Username: blank</li>
                        <li className="li">Password: blank</li>
                    </ul>
  </div>
  </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(Login);

