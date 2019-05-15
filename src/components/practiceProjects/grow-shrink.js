import React, { Component } from "react";

export default class GrowShrink extends Component {
    constructor() {
        super();

        this.state = {
            fontSize: 20
        }

        this.styles = {
            display: 'flex',
            justifyContent: 'center'
        }
    }

    growShrink = amount => {
        this.setState({
            fontSize: this.state.fontSize + amount
        })
    }

    render() {
        return (
            <div>
                <div style={this.styles}>
                    <button onClick={() => this.growShrink(5)} style={{}}>Grow</button>
                    <button onClick={() => this.growShrink(-5)}>Shrink</button>
                </div>

                <div style={this.styles}>
                    <h1 style={ this.state }>{this.state.fontSize}px</h1>
                </div>
            </div>
        )
    }
    
}