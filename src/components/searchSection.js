import React from 'react'
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import LocationSearch from './locationSearch'
import './searchSection.css'

export default class SearchSection extends React.Component {

	render () {
        if (!this.props.userData) {
		return (
        <div id="SearchSection">
        <h2 id="search-title">Search Musicians Here!</h2>
        <LocationSearch />
        </div>
		)
    }
            return (
        <div id="SearchSection">
        <h2 id="search-title">Search Musicians Here!</h2>
        <LocationSearch />
         <p>{this.props.location}</p>
        </div>
        )
	}
}
