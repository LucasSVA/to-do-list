import React, { Component } from 'react'

class List extends Component {
    render() {

        return (

            <div>
                <p>{this.props.task}</p>
                <p>{this.props.status}</p>
            </div>
        )
    }
}
export default List
