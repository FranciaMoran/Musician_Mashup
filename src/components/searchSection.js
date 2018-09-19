import React from 'react'
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import LocationSearch from './locationSearch'
import './searchSection.css'

export class SearchSection extends React.Component {

	render () {
        if (!this.props.userData) {
		return (
        <div id="SearchSection">
        <h2 id="search-title">Search Musicians Here!</h2>
        <p className="note">developer's note: (Two user accounts list Chicago as their location)</p> 
        <LocationSearch />
        </div>
		)
    }
            return (
        <div id="SearchSection">
        <h2 id="search-title">Search Musicians Here!</h2>
        <p className="note">developer's note: (Two user accounts list Chicago as their location)</p> 
        <LocationSearch />
        <div>{this.props.userData.map((user, locations) => <div className="each-user" key={locations}>Location: {user.location}
             <p>Name: {user.firstName}</p></div>)}</div>
        </div>
        )
	}
}

const mapStateToProps = state => {
    return {
    userData: state.userReducer.userData
    };
};

export default requiresLogin()(connect(mapStateToProps)(SearchSection));