import React from 'react'
import BandForm from './bandForm'
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {showCreatedBand} from '../actions/bandActions';
import {deleteBand} from '../actions/bandActions';
import './bandSection.css'

export class BandSection extends React.Component {
      componentDidMount() {
        this.props.dispatch(showCreatedBand());
    }
    
    deletingBand (event) {
        alert("test");
        this.props.dispatch(deleteBand())
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
                <div>
             <h2 id="band-title">Band(s)</h2>
              <button onClick={() => this.setEditing(true)}>Create A New Band</button>
              </div>
            )
        }
 else if (this.state.editing) {
        return ( 
            <div>
             <h2 id="band-title">Create Band</h2>
             <BandForm />
             </div>
             )
         }

		else if (!this.state.editing) {
		return ( 
        <div>
             <h2 id="band-title">Band(s)</h2>
             {this.props.bandData.map((band, names) => <p key={names}>{band.bandName}
             <button onClick={() => this.props.deletingBand}>Delete</button>
             <p>{band.memberOne}<button onClick={() => this.props.deletingBand}>Delete</button></p></p>)}
             <button onClick={() => this.setEditing(true)}>Create A New Band</button>
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




