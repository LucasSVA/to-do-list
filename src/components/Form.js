import React, { Component } from 'react'

class Form extends Component {

    constructor() {
        super()
        this.state = {
            task: ""
        }
    }

    handleTaskDescriptionChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.formSubmit(this.state.task)
        console.log("submit");
        this.setState({
            task: ""
        })
    }

    render() {
        return (

            <form action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.handleSubmit}>
                <div className="mb-4 flex justify-center ">
                    <input
                        className="shadow appearance-none border rounded w-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="task"
                        onChange={this.handleTaskDescriptionChange}
                        value={this.state.task}
                    />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                        Ajouter
                    </button>
                </div>
            </form>

        )
    }
}

export default Form
