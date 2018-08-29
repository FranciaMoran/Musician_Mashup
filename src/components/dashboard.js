import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import HeaderBar from './header-bar';
import Profile from './profile'
import BandSection from './bandSection'
import './dashboard.css'

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
            <HeaderBar />
            <div id="whole-dashboard">
                 <h1 id="dashboard-title">My Dashboard</h1>
                   <Profile/>
                        <h2 id="invites">invites</h2>
    <BandSection/>
            </div>
            </div>
        );
    }
}


