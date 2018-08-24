import React from 'react';

import './loginForm.css';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty} from '../validators';
import {Field, reduxForm, focus} from 'redux-form';

export class LoginForm extends React.Component {

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
            <form
                className="login-inputs"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                 <div id="username-input">
                <label id="username-label" htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                </div>
                 <div id="password-input">
                <label  id="password-label" htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                </div>
                <button disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
            </div>
        );
    }
}  

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
