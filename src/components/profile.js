import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import ProfileForm from './profileForm';
import {showEditedProfile} from '../actions/auth'
import './dashboard.css'


export class Profile extends React.Component {
    /*componentDidMount() {
        this.props.dispatch(showEditedProfile());
    }*/

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
                            <h2 id="profile-title">Profile</h2>
                            <div className="lines">
                                <label>Name: </label>
                                <p className="dashboard-name">{this.props.name}</p>
                            </div>
                            <div className="lines">
                                <label>Location: </label>
                                <p>{this.props.location}</p>
                            </div>
                            <div className="lines">
                                <label>Instrument: </label>
                                <p>{this.props.instrument}</p>
                            </div>
                            <div className="lines">
                                <label>Genre(s) of Music: </label>
                                <p>{this.props.genre}</p>
                            </div>
                             <div className="lines">
                            <label>Cell: </label>
                            <p>{this.props.cell}</p>
                            </div>
                             <div className="lines">
                            <label>Email: </label>
                            <p>{this.props.email}</p>
                            </div>
                            <button id="profile-edit-button" type="button" onClick={() => this.setEditing(true)}>Edit Profile</button>
                        </div>
                        </div>
                     );
                 }

   return (
    <div>
    <h2 id="profile">Profile</h2>
    <ProfileForm />       
    </div>
   )
}

}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        id: `${currentUser.id}`,
        location: `${currentUser.location}`,
        instrument: `${currentUser.instrument}`,
        genre: `${currentUser.genre}`,
        cell: `${currentUser.cell}`,
        email: `${currentUser.email}`
    };
};

export default requiresLogin()(connect(mapStateToProps)(Profile));



 







