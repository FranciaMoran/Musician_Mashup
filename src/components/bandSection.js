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
        console.log(this.props.bandData);
        if (!this.props.bandData) {
            return (
                <div>
            <p>loading</p>
            </div>
            )
        }
		if (!this.state.editing) {
		return( 
			<div>
             <h2 id="band-title">Band(s)</h2>
             {this.props.bandData.map((band, firstBand) => <p key={firstBand}>{band.bandName}</p> )}
             {this.props.bandData.map((band, firstBand) => <p key={firstBand}>{band.memberOne}</p> )}
             <button onClick={() => this.setEditing(true)}>Create A New Band</button>
             </div>
			);
		}

		return (
        <BandForm />
		)
	}
}

const mapStateToProps = state => {
    return {
    bandData: state.bandReducer.bandData
    };
};

export default requiresLogin()(connect(mapStateToProps)(BandSection));




