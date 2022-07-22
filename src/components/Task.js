import React, { Component } from 'react'

export default class Task extends Component {
    render() {
        return (
            <div>
                <p>{this.props.description}</p>
                <p>{this.props.status}</p>
            </div>
        )
    }
}
