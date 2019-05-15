import React, {Component} from 'react';
import { NavLink } from "react-router-dom";


export default class NavigationContainer extends Component {
    constructor() {
        super();
    }

    render() {
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
            
                        <NavLink to="/add-sub" activeClassName="nav-link-active">Add Sub</NavLink>
                        <NavLink to="/hello-goodbye" activeClassName="nav-link-active">Hello Goodbye</NavLink>
                        <NavLink to="/grow-shrink" activeClassName="nav-link-active">Grow Shrink</NavLink>
                        <NavLink to="/peekaboo" activeClassName="nav-link-active">Peekaboo</NavLink>
                        <NavLink to="/align-me" activeClassName="nav-link-active">Align Me</NavLink>
                        <NavLink to="/clock" activeClassName="nav-link-active">Clock</NavLink>
                        <NavLink to="/html-color" activeClassName="nav-link-active">HTML Color</NavLink>
                    {false ? <button>Add Blog</button> : null}
                </div>

                <div className="right-side">BRIGHAM LIND</div>
            </div>
        )
    }
}