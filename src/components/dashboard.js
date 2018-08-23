import React from 'react'
import './dashboard.css'
import Profile from './profile'
import BandSection from './bandSection'



export default class Dashboard extends React.Component {
    render() {
	return (
		      <div>
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