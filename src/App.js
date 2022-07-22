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


  deleteTask = (x, i) => {

    const deleted = this.state.tasks.splice(i, 1)
    console.log("button");

    this.setState({

      tasks: deleted


    })

  }

  render() {
    return (

      <div>


        <Form formSubmit={this.addTask} />
        <List tasks={this.state.tasks} delete={this.deleteTask} />

      </div>
    )
  }
}

export default App;