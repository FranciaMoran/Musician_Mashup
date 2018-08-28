import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './loginPage.css';
import LoginForm from './loginForm';

export function LoginPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
         <div id="login-page">
            <h1 id="login-title">Login</h1>
            <LoginForm />
            <Link to="/register">Create Account</Link>
  <h3 id="demo-login">Demo Login</h3>
                    <p id="demo-login-description">You can use this login to see an example of a profile and the home dashboard.</p>
                    <ul>
                        <li className="li">Username: blank</li>
                        <li className="li">Password: blank</li>
                    </ul>
        </div>
        </div>
    );
}



const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);

