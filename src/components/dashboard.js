import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import Profile from './profile'
import BandSection from './bandSection'
import './dashboard.css'

export class Dashboard extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        return (
            <div className="dashboard">
            <div id="whole-dashboard">
            <button onClick={() => this.logOut()}>Log out</button>
                 <h1 id="dashboard-title">My Dashboard</h1>
                   <Profile/>
                        <h2 id="invites">invites</h2>
    <BandSection/>
            </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Dashboard);