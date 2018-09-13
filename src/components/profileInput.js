 import React from 'react';
 import {connect} from 'react-redux';
import requiresLogin from './requires-login';

export class ProfileInput extends React.Component {
 componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    render() {
        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="form-error">{this.props.meta.error}</div>;
        }

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <div className="form-warning">{this.props.meta.warning}</div>
            );
        }

        return (
            <div className="form-input">
                <label htmlFor={this.props.input.name}>
                    {this.props.label}
                    {error}
                    {warning}
                </label>
                <input
                    {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    ref={input => (this.input = input)}
                    placeholder={this.props.input.name}
                />
            </div>
        );
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

export default requiresLogin()(connect(mapStateToProps)(ProfileInput));

