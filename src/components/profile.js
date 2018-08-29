import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';

export class Profile extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        if (text && this.props.onAdd) {
            this.props.onAdd(text);
        }
        this.textInput.value = '';
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
                                <p>Chicago</p>
                            </div>
                            <div className="lines">
                                <label>Instrument: </label>
                                <p>Guitar</p>
                            </div>
                            <div className="lines">
                                <label>Genre(s) of Music: </label>
                                <p>Jazz</p>
                            </div>
                            <p id="contact">Your Contact Info</p>
                            <label>cell: </label>
                            <p>(925)482-5973</p>
                            <label>Email: </label>
                            <p>franciam115@gmail.com</p>
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
        name: `${currentUser.firstName} ${currentUser.lastName}`
    };
};

export default requiresLogin()(connect(mapStateToProps)(Profile));