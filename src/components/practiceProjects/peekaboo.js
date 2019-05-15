import React, { Component } from "react";

export default class Peekaboo extends Component {
    constructor() {
        super();

        this.state = {
            display: 'none'
        }

        this.styles = {
            display: 'flex',
            justifyContent: 'center'
        }
    }

    showHide = () => {
        this.setState({
            display: this.state.display === 'none' ? 'inline' : 'none'
        })
    }

    render() {
        return (
            <div>
                <div style={this.styles}>
                    <button onClick={() => this.showHide()}>Show</button>
                </div>

                <div style={this.styles}>
                    <h1 style={this.state}>Peek-a-boo</h1>
                </div>
            </div>
        )
    }
}