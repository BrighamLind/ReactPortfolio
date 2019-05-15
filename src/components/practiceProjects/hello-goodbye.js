import React, { Component } from "react";

export default class HelloGoodbye extends Component {
    constructor() {
        super();

        this.state = {
            toggle: "Hello"
        }
    }

    toggleFunction = () => {
        this.setState({
            toggle: this.state.toggle === "Hello" ? "Goodbye" : "Hello"
        })
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h1>{this.state.toggle}</h1>
                <button onClick={() => this.toggleFunction()} style={{alignSelf: 'center', width: '50px'}}>Toggle</button>
            </div>
        )
    }
}