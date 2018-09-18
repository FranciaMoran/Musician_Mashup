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
        <LocationSearch />
        </div>
		)
    }
            return (
        <div id="SearchSection">
        <h2 id="search-title">Search Musicians Here!</h2>
        <LocationSearch />
        <div>{this.props.userData.map((user, locations) => <div className="each-band" key={locations}>{user.location}
             <p>Members: {user.firstName}</p></div>)}</div>
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