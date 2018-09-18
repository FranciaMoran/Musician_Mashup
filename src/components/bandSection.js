import React from 'react'
import BandForm from './bandForm'
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {showCreatedBand} from '../actions/bandActions';
import {deleteBand} from '../actions/bandActions';
import {editBand} from '../actions/bandActions';
import './bandSection.css'

export class BandSection extends React.Component {
      componentDidMount() {
        this.props.dispatch(showCreatedBand());
    }
    
    deletingBand (event, id) {
        //alert(bandData);
        this.props.dispatch(deleteBand(id))
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
        //console.log(this.props.bandData);
        if (!this.props.bandData) {
            return (
                <div className="band-section">
             <h2 id="band-title">Band(s)</h2>
              <button onClick={() => this.setEditing(true)}>Create A New Band</button>
              </div>
            )
        }
 else if (this.state.editing) {
        return ( 
            <div className="band-section">
             <h2 id="band-title">Create Band</h2>
             <BandForm />
             </div>
             )
         }
      else if (!this.state.editing && this.props.bandData) {
		return ( 
             <div className="band-section">
             <h2 id="band-title">Band(s)</h2>
             <button id="create-new-band" onClick={() => this.setEditing(true)}>Create A New Band</button>
              <div>{this.props.bandData.map((band, names) => <div className="each-band" key={names}>{band.bandName}
              <button className="delete-button" onClick={e => this.deletingBand(e, band._id)}>Delete</button>
             <p>Members: {band.memberOne}</p></div>)}</div>
             </div>
			);
        }
	}
}

const mapStateToProps = state => {
    return {
    bandData: state.bandReducer.bandData
    };
};

export default requiresLogin()(connect(mapStateToProps)(BandSection));




