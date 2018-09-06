import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import Profile from './profile'
import BandSection from './bandSection'
import SearchSection from './searchSection'
import './dashboard.css'

export class Dashboard extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    goToSearch(event) {
        event.preventDefault();
        this.props.history.push(`/search`);
    }

    render() {
        return (
            <div className="dashboard">
            <div id="whole-dashboard">
            <button id="log-out" onClick={() => this.logOut()}>Log out</button>
                 <h1 id="dashboard-title">My Dashboard</h1>
                   <Profile/>
    <BandSection />
    <button onClick={e => this.goToSearch(e)}>Search Musicians</button>
            </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Dashboard);