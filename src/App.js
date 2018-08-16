import React from 'react';
import logo from './logo.svg';
import Landing from './components/landingPage'
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './components/loginPage'
import CreateAccount from './components/createAccount'

export default function App(props) { 
    return (
      <main>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/createAccount" component={CreateAccount}/>
      </main>
    );
}

