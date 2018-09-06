import React from 'react'
import BandForm from './bandForm'
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import './BandSection.css'

export class BandSection extends React.Component {
	  constructor(props) {
        super(props);
        this.state = {
            editing: false 
        }
    }


     setEditing(editing) {
        this.setState({
            editing
        });
    }

	render () {
		if (!this.state.editing) {
		return( 
			<div>
             <h2 id="band-title">Band(s)</h2>
             <p></p>
             <button onClick={() => this.setEditing(true)}>Create A New Band</button>
             </div>
			);
		}
		return (
        <div>
        <BandForm/>
             </div>
		)
	}
}

const mapStateToProps = state => {
    return {
    };
};

export default requiresLogin()(connect(mapStateToProps)(BandSection));