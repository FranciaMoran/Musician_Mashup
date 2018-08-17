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
  <button>Submit</button>
  </form>
  <button id="create-new-account-button" onClick={e => this.goToCreateAccount(e)}>Create a new account</button>
  </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(Login);

