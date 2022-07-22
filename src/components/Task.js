import React, { Component } from 'react'

export default class Task extends Component {
    render() {
        return (
            <div className='flex'>

                <p>{this.props.description}</p>
                <p>{this.props.status}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => this.delete(x, i)}>
                    supprimer
                </button>
            </div>
        )
    }
}
