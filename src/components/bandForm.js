import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {createBand} from '../actions/bandActions';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import Input from './input';
import Profile from './profile'
import './dashboard.css'



export class BandForm extends React.Component {
	onSubmit(values) {
        const {bandName, members} = values;
        const createBandInfo = {bandName, members};
        return this.props.dispatch(createBand(createBandInfo))
        console.log(createBandInfo);
    }

	render() {
		return (
        <form
                className="band-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}
                >
                <div className="lines">
                <label className="create-account-labels" htmlFor="bandName">Name:</label>
                <Field component={Input} type="text" name="bandName"/>
                </div>
                <button
                    type="submit">
                    Confirm Changes
                </button>
            </form>
			)
}
}



export default reduxForm({
    form: 'band-form',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('band-form', Object.keys(errors)[0]))
})(BandForm);




 