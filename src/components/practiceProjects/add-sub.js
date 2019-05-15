import React, { Component } from "react";

export default class AddSub extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }

        this.buttonStyles = {
            width: "30px"
        }
    }

    crement = amount => {
        this.setState({
            count: this.state.count + amount
        });
    }

    render() {
        return (
            <div style={{display: 'flex'}}>
                <h1 style={{width: '50px'}}>${this.state.count}</h1>
                <button onClick={() => this.crement(1)} style={this.buttonStyles}>Add</button>
                <button onClick={() => this.crement(-1)} style={this.buttonStyles}>Sub</button>
            </div>
        )
    }
}