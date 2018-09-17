import React from 'react'
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {searchUserByName} from '../actions/searchActions'
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import Input from './Inputs/input';
import './searchSection.css'



export class NameSearch extends React.Component {
    onSubmit(values) {
        const {name} = values;
        const userName = {name};
        return this.props.dispatch(searchUserByName(userName))
    }

	render () {
		return (
        <form id="by-name" 
        className="search-name"
        onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
        <label className="labels">By Name:</label>
        <Field component={Input} type="text" name="name"/>
         <button
                    type="submit">
                    Search
                </button>
        </form>
		)
	}
}

export default reduxForm({
    form: 'search-name',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('search-name', Object.keys(errors)[0]))
})(NameSearch);


