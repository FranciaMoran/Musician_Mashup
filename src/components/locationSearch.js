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
        const {location} = values;
        //const searchByLocation = {location};
        return this.props.dispatch(searchUserByLocation(location))
    }

	render () {
		return (
        <form id="by-location" 
        className="search-location"
        onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
        <label id="location-label">By Location:</label>
        <Field component={Input} type="text" name="location" id="location-input"/>
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