import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import LoginPage from './loginPage'
import LandingPage from './landingPage';
import SearchSection from './searchSection';
import Dashboard from './dashboard';
import ProfileForm from './profileForm';
import RegistrationPage from './registrationPage';
import {refreshAuthToken} from '../actions/auth';

export default class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    } 
    render() {
        return (
            <div className="app">
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/loginscreen" component={LoginPage} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/register" component={RegistrationPage} />
                <Route exact path="/search" component={SearchSection} />
            </div>
        );
    }
}






