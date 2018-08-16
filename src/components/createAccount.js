import React from 'react';

import './createAccount.css';

export default class CreateAccount extends React.Component {

    render() {
        return (
            <div>
            <form>
      <h1>Musician Mashup</h1>
      <h2>Create Account</h2>
                <div className="each-field">
                <label>First Name:</label>
                <input type="text"></input>
                </div>
                <div class="each-field">
                <label>Last Name:</label>
                <input type="text"></input>
                </div>
                <div className="each-field">
                <label>Username:</label>
                <input type="text"></input>
                </div>
                <div class="each-field">
                <label>Password:</label>
                <input type="text"></input>
                </div>
                <div className="each-field">
                <label>Confirm Password:</label>
                <input type="text"></input>
                </div>
                <div class="each-field" id="done">
                <button>Done</button>
                </div>
            </form>
  </div>
        );
    }
}