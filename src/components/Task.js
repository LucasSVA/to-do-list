import React, { Component } from 'react'

export default class Task extends Component {
    constructor(){
        super();
        this.state = {
          modify : false,
          tesk: "",
        };
      };

    handleTaskChange = (() => {
        this.setState({modify: true})
    })

    newDescription = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    render() {
        return (
        <>
            {this.state.modify === false ? (
            <div className='mb-4 flex justify-between px-80 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <p>{this.props.description}</p>
                <p>{this.props.status}</p>
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={this.handleTaskChange}>
                    Modifier
                </button>
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => this.props.deleteTask(this.props.index)}>
                    Supprimer
                </button>             
            </div>
            ) : (
            <div>
                <form>
                    <input
                        className="shadow appearance-none border rounded w-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="task"
                        onChange={this.newDescription}
                        value={this.state.item.task}
                    />
                    <select name='status' onChange="">
                        <option value="to do">To do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="submit">
                        Valider
                    </button>  
                </form>
            </div>
                       )
                    } 
        </>
)}
}
