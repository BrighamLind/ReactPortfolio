import React, { Component } from "react";
import Login from "../auth/login";
import loginImage from "../../../static/assets/images/auth/login.jpg";

export default class Auth extends Component {
    render() {
        return (
            <div className="auth-page-wrapper">
                <div className="left-column" style={{backgroundImage: `url(${loginImage})`}}/>
                
                <div className="right-column">
                    <Login />
                </div>
            </div>
        )
    }
}