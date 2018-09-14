import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './Inputs/input';
import './registrationForm.css'
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 5, max: 20});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <div className="each-field">
                <label className="create-account-labels" htmlFor="firstName">First Name:</label>
                <Field component={Input} type="text" name="firstName" />
                </div>
                <div className="each-field">
                <label className="create-account-labels" htmlFor="lastName">Last Name:</label>
                <Field component={Input} type="text" name="lastName" />
                </div>
                <div className="each-field">
                <label className="create-account-labels" htmlFor="username">Username:</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                </div>
                <div className="each-field">
                <label className="create-account-labels" htmlFor="password">Password:</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                />
                </div>
                <div className="each-field">
                <label className="create-account-labels" htmlFor="passwordConfirm">Confirm Password:</label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                </div>
                <button
                id="register-button"
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
