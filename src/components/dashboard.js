import React from 'react'
import './dashboard.css'
import Profile from './profile'



export default class Dashboard extends React.Component {
    render() {
	return (
		      <div>
                <div id="whole-dashboard">
	               <h1 id="dashboard-title">My Dashboard</h1>
                   <Profile/>
                        <h2 id="invites">invites</h2>
    <h2 id="bands">Band(s):</h2>
    <button id="create-a-band">Create a Band</button>
    </div>
    </div>
	);
}
}