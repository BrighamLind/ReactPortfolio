import React, { Component } from "react";

export default class AlignMe extends Component {
    constructor() {
        super();

        this.state = {
            alignSelf: 'flex-start'
        }
    }

    alignMe = position => {
        this.setState({
            alignSelf: position
        })
    }

    render() {
        return (
            <div style={{ width: '100vw', height: '100px', display: 'flex', flexDirection: 'column' }}>
                <h1 style={this.state}>Align Me</h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={() => this.alignMe('flex-start')} style={this.buttonStyling}>Left</button>
                    <button onClick={() => this.alignMe('center')} style={this.buttonStyling}>Center</button>
                    <button onClick={() => this.alignMe('flex-end')} style={this.buttonStyling}>Right</button>
                </div>
            </div>
        )
    }
}