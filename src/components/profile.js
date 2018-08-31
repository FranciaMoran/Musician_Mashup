import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import ProfileForm from './profileForm'
import {fetchData} from '../actions/protected-data';

export class Profile extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

   /* componentDidMount() {
        this.props.dispatch(fetchData());
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
                            <h2>Profile</h2>
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
        location: `${currentUser.location}`
    };
};

export default requiresLogin()(connect(mapStateToProps)(Profile));



 







