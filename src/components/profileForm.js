import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {editProfile} from '../actions/protected-data';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import Input from './input';
import Profile from './profile'
import {fetchProtectedData} from '../actions/protected-data';
import './dashboard.css'




export class ProfileForm extends React.Component {
	onSubmit(values) {
        const {name, location, instrument, genre, cell, email} = values;
        const profileInfo = {name, location, instrument, genre, cell, email};
        return this.props.dispatch(editProfile(profileInfo))
    }

	render() {
		return (
        <form
                className="profile-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}
                >
                <div className="lines">
                <label className="create-account-labels" htmlFor="name">Name:</label>
                <Field component={Input} type="text" name="name"/>
                </div>
                <div className="lines">
                <label className="create-account-labels" htmlFor="location">Location:</label>
                <Field component={Input} type="text" name="location" />
                </div>
                <div className="lines">
                <label className="create-account-labels" htmlFor="instrument">Instrument:</label>
                <Field component={Input} type="text" name="instrument"/>
                </div>
                <div className="lines">
                <label className="create-account-labels" htmlFor="genre">Genre:</label>
                <Field component={Input} type="text" name="genre"/>
                </div>
                <div className="lines">
                <label className="create-account-labels" htmlFor="cell">Cell:</label>
                <Field component={Input} type="text" name="cell"/>
                </div>
                <div className="lines">
                <label className="create-account-labels" htmlFor="email">Email:</label>
                <Field component={Input} type="text" name="email"/>
                </div>
                <button
                id="register-button"
                    type="submit">
                    Confirm Changes
                </button>
            </form>
			)
}
}



export default reduxForm({
    form: 'profile-form',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('profile-form', Object.keys(errors)[0]))
})(ProfileForm);




 