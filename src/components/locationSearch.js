import React from 'react'
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import Input from './input';
import './searchSection.css'



export class LocationSearch extends React.Component {
    onSubmit(values) {
        const {nameSearch} = values;
        const searchByName = {nameSearch};
        return this.props.dispatch()
    }

	render () {
		return (
        <form id="by-location" 
        className="search-location"
        onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
        <label className="labels">By Location:</label>
        <Field component={Input} type="text" name="nameSearch"/>
         <button
                    type="submit">
                    Search
                </button>
        </form>
		)
	}
}

export default reduxForm({
    form: 'search-location',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('search-location', Object.keys(errors)[0]))
})(LocationSearch);