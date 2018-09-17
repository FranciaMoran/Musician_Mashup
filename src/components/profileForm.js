import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {editProfile} from '../actions/auth';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import ProfileInputFieldOne from './Inputs/profileInputFieldOne';
import ProfileInputFieldTwo from './Inputs/profileInputFieldTwo';
import ProfileInputFieldThree from './Inputs/profileInputFieldThree';
import ProfileInputFieldFour from './Inputs/profileInputFieldFour';
import ProfileInputFieldFive from './Inputs/profileInputFieldFive';
import ProfileInputFieldSix from './Inputs/profileInputFieldSix';
import Profile from './profile'
import './dashboard.css'


export class ProfileForm extends React.Component {
	onSubmit(values) {
        const {name, location, instrument, genre, cell, email} = values;
        const profileInfo = {name, location, instrument, genre, cell, email};
        this.props.dispatch(editProfile(profileInfo))
        //this.props.history.push(`/dashboard`);
    }
/*
    constructor(props) {
        super(props);
        this.state = {
            editing: true
        }
    }

    nowSubmitted(editing) {
        this.setState({
            editing: false
        });
    }
*/

	render() {
		return (
            <div>
        <form
                className="profile-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}
                >
                <div className="lines">
                <label className="create-account-labels" htmlFor="location">Location:</label>
                <Field component={ProfileInputFieldTwo} type="text" name="location"/>
                </div>
                <div className="lines">
                <label className="create-account-labels" htmlFor="instrument">Instrument:</label>
                <Field component={ProfileInputFieldThree} type="text" name="instrument"/>
                </div>
                <div className="lines">
                <label className="create-account-labels" htmlFor="genre">Genre:</label>
                <Field component={ProfileInputFieldFour} type="text" name="genre"/>
                </div>
                <div className="lines">
                <label className="create-account-labels" htmlFor="cell">Cell:</label>
                <Field component={ProfileInputFieldFive} type="text" name="cell"/>
                </div>
                <div className="lines">
                <label className="create-account-labels" htmlFor="email">Email:</label>
                <Field component={ProfileInputFieldSix} type="text" name="email"/>
                </div>
                <button
                id="register-button"
                    type="submit">
                    Confirm Changes
                </button>
            </form>
            </div>
			);
    /*}
    if (this.props.editing) {
    onClick={() => this.nowSubmitted(false)}
    return (
     <Profile />
        ) */
    }

}


export default reduxForm({
    form: 'profile-form',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('profile-form', Object.keys(errors)[0]))
})(ProfileForm);



 