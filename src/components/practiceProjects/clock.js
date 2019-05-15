import React, { Component } from "react";
import moment from "moment";

export default class Clock extends Component {
    constructor() {
        super();

        this.state = {
            date: moment().format('LTS')
        }

        this.divStyles = {
            width: '100vw',
            display: "flex",
            justifyContent: 'center'
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: moment().format('LTS')
        })
    }
    
    render() {

        return (
            <div style={this.divStyles}>
                <h1>Hello, it is<br></br>{this.state.date}</h1>
            </div>
        )
    }
}