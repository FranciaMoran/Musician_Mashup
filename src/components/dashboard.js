import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import HeaderBar from './header-bar';
import Profile from './profile'
import BandSection from './bandSection'
import './dashboard.css'

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <div className="dashboard">
            <HeaderBar />
            <div id="whole-dashboard">
                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
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

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
