import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../../components/requires-login';

export class ProfileInputFieldFour extends React.Component {
    render() {
        return (
            <div className="form-input">
                <label htmlFor={this.props.input.name}>
                    {this.props.label}
                </label>
                <input
                    {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    ref={input => (this.input = input)}
                    placeholder={this.props.genre}
                />
            </div>
        );
    }
}



const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        genre: `${currentUser.genre}`
    };
};

export default requiresLogin()(connect(mapStateToProps)(ProfileInputFieldFour))