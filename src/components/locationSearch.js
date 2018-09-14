import React from 'react'
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {Field, reduxForm, focus} from 'redux-form';
import {searchUserByLocation} from '../actions/searchActions'
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import Input from './Inputs/input';
import './searchSection.css'



export class LocationSearch extends React.Component {
    onSubmit(values) {
        const {locationSearch} = values;
        const searchByLocation = {locationSearch};
        return this.props.dispatch(searchUserByLocation(searchByLocation))
    }

	render () {
		return (
        <form id="by-location" 
        className="search-location"
        onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
        <label className="labels">By Location:</label>
        <Field component={Input} type="text" name="locationSearch"/>
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