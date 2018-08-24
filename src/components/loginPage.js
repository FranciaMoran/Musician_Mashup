import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import './loginPage.css';
import {connect} from 'react-redux';
import {login} from '../actions/auth';
import LoginForm from './loginForm';
import Input from './input';
import {required, nonEmpty} from '../validators';
import {Field, reduxForm, focus} from 'redux-form';

export class LoginPage extends React.Component {
          goToCreateAccount(event) {
        event.preventDefault();
        this.props.history.push(`/createAccount`);
    }

    render() {
        
     return (
        <div>
        <div id="login-page">
     <h1 id="login-title">Login</h1>
            <LoginForm />
                <button id="create-new-account-button" onClick={e => this.goToCreateAccount(e)}>Create a new account</button>
                </div>
                </div>
        );
    }
}  

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);

