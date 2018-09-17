import React from 'react'
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import LocationSearch from './locationSearch'
import './searchSection.css'

export class SearchSection extends React.Component {

	render () {
        if (!this.props.userData){
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

const mapStateToProps = state => {
    return {
        location: state.userReducer.userData.location
    };
};

export default requiresLogin()(connect(mapStateToProps)(SearchSection));