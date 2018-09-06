import React from 'react'
import BandForm from './bandForm'
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import NameSearch from './nameSearch'
import LocationSearch from './locationSearch'
import './searchSection.css'

export default class SearchSection extends React.Component {

	render () {
		return (
        <div id="SearchSection">
        <h2 id="search-title">Search Musicians Here!</h2>
        <NameSearch />
        <LocationSearch />
        </div>
		)
	}
}
