import { logDOM } from '@testing-library/react';
import { list } from 'postcss';
import React, { Component } from 'react';
import Form from './components/Form';
import List from './components/List';
class App extends Component {

  constructor() {
    super()
    this.state = {
      tasks: []
    }
  }

  addTask = (str) => {
    const clonedTasks = [...this.state.tasks, {
      description: str,
      status: "to do"
    }];
    this.setState({
      tasks: clonedTasks
    });

  };

  deleteTask = (i) => {
    const clonedTasks = [...this.state.tasks];
    clonedTasks.splice(i, 1);
    this.setState({
      tasks: clonedTasks,
    });
  };

  modifyTask = (item, i) => {
    const clonedTasks = [...this.state.tasks]
    clonedTasks[i] = item
    this.setState({
      tasks: clonedTasks,
    })
  }
  render() {
    return (

      <div>
        <h1 className="text-center text-6xl font-extrabold">To Do List</h1>
        <Form formSubmit={this.addTask} />
        <article className='mb-4 flex justify-center'>
          <button className='border-solid border-2 rounded text-jg bg-red-600'>All</button>
          <button className='border-solid border-2 rounded text-jg bg-amber-400'>To Do</button>
          <button className='border-solid border-2 rounded text-jg bg-yellow-200'>Doing</button>
          <button className='border-solid border-2 rounded text-jg bg-lime-400'>Done</button>
        </article>
        <List 
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
        />
      </div>
    )
  }
}

export default App;