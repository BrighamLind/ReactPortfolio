import React from 'react';
import axios from "axios";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";


const NavigationContainer = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink to={route} activeClassName="nav-link-active">{linkText}</NavLink>
            </div>
        )
    }

    const handleSignOut = () => {
        axios.delete("https://api.devcamp.space/logout", { withCredentials: true })
        .then(response => {
            if (response.status === 200) {
                props.history.push("/");
                props.handleSuccessfulLogout();
            }
            return response.data;
        }).catch(error => {
            console.log("Error signing out", error)
        })
    }
    
    return (
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>                
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/about-me" activeClassName="nav-link-active">About</NavLink>
                </div>
                
                <div className="nav-link-wrapper">
                    <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/blog" activeClassName="nav-link-active">Blog</NavLink>
                </div>

                {props.loggedInStatus === "LOGGED_IN" ?
                    dynamicLink("/portfolio-manager", "Portfolio Manager")
                    : null}
        
                <div className="nav-link-wrapper">
                    <NavLink to="/add-sub" activeClassName="nav-link-active">Add Sub</NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/hello-goodbye" activeClassName="nav-link-active">Hello Goodbye</NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/grow-shrink" activeClassName="nav-link-active">Grow Shrink</NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/peekaboo" activeClassName="nav-link-active">Peekaboo</NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/align-me" activeClassName="nav-link-active">Align Me</NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/clock" activeClassName="nav-link-active">Clock</NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/html-color" activeClassName="nav-link-active">HTML Color</NavLink>
                </div>

                {false ? <button>Add Blog</button> : null}
            </div>

            <div className="right-side">
                BRIGHAM LIND
                {props.loggedInStatus === "LOGGED_IN" ? <a onClick={handleSignOut}>Sign Out</a> : null}
            </div>
        </div>
    )
}

export default withRouter(NavigationContainer);