import React from 'react'
import './dashboard.css'
import Profile from './profile'
import BandSection from './bandSection'
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';



export default class Dashboard extends React.Component {

    render() {
	return (
		      <div>
                <div id="whole-dashboard">
                 <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
	               <h1 id="dashboard-title">My Dashboard</h1>
                   <Profile/>
                        <h2 id="invites">invites</h2>
    <BandSection/>
    </div>
    </div>
	);
}
}