import React from 'react'
import BandForm from './bandForm'
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {showCreatedBand} from '../actions/bandActions';
import './BandSection.css'

export class BandSection extends React.Component {
      componentDidMount() {
        this.props.dispatch(showCreatedBand());
    }
    
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
       console.log(`BANDNAME: ${this.props.bandName}`)
		if (!this.state.editing) {
		return( 
			<div>
             <h2 id="band-title">Band(s)</h2>
             <p id="band-names">{this.props.bandName}</p>
             <button onClick={() => this.setEditing(true)}>Create A New Band</button>
             </div>
			);
		}

		return (
            <div>
        <BandForm />
        </div>
		)
	}
}

const mapStateToProps = state => {
    return {
    bandName: state.bandData.bandName
    };
};

export default requiresLogin()(connect(mapStateToProps)(BandSection));




