import React from 'react'
import BandForm from './bandForm'
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import './BandSection.css'
import {fetchProtectedData} from '../actions/protected-data';
import {API_BASE_URL} from '../config';
import './searchSection.css'

export default class SearchSection extends React.Component {

	render () {
		return (
        <div id="SearchSection">
        <h2 id="search-title">Search Musicians Here!</h2>
        <div id="by-name">
        <label className="labels">By Name:</label>
        <input type="text"></input>
        <button>Search</button>
        </div>
        <div id="by-location">
        <label className="labels">By Location:</label>
        <input type="text"></input>
        <button>Search</button>
        </div>
        </div>
		)
	}
}
