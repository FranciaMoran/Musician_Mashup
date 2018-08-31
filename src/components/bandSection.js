import React from 'react'
//import BandForm from './bandForm'
import './BandSection.css'


export default class BandSection extends React.Component {
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
             <button onClick={() => this.setEditing(true)}>Create A New Band</button>
             </div>
			);
		}
		return (
        <div>
             </div>
		)
	}
}