import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import editProfile from '../actions/profiledb'


export class Profile extends React.Component {
    /*
     onSubmit(values) {
        return this.props.dispatch(editProfile(values.name, values.location, values.genre, values.cell, values.email));
    }
*/
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
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

    render() {

        if (!this.state.editing) {

  return (
    <div>
            <div id="profile">
                            <h2>Profile</h2>
                            <div className="lines">
                                <label>Name: </label>
                                <p className="dashboard-name">{this.props.name}</p>
                            </div>
                            <div className="lines">
                                <label>Location: </label>
                                <p>{this.props.protectedData}</p>
                            </div>
                            <div className="lines">
                                <label>Instrument: </label>
                                <p></p>
                            </div>
                            <div className="lines">
                                <label>Genre(s) of Music: </label>
                                <p></p>
                            </div>
                            <p id="contact">Your Contact Info</p>
                            <label>Cell: </label>
                            <p></p>
                            <label>Email: </label>
                            <p></p>
                            <button type="button" onClick={() => this.setEditing(true)}>Edit Profile</button>
                        </div>
                        </div>
                     );
                 }

   return (
    <div>
            <form id="profile">
                            <h2>Profile</h2>
                            <div className="lines">
                                <label>Name: </label>
                                <input type="text"></input>
                            </div>
                            <div className="lines">
                                <label>Location: </label>
                                <input type="text"></input>
                            </div>
                            <div className="lines">
                                <label>Instrument: </label>
                                <input type="text"></input>
                            </div>
                            <div className="lines">
                                <label>Genre(s) of Music: </label>
                                <input type="text"></input>
                            </div>
                            <p id="contact">Your Contact Info</p>
                            <label>cell: </label>
                            <input type="text"></input>
                            <label>Email:</label>
                            <input></input>
                            <button>Confirm Changes</button>
                        </form>
                        </div>
   )
}

}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Profile));















