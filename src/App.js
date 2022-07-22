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

  render() {
    return (

      <div>
        <Form formSubmit={this.addTask} />
        {this.state.tasks.map(task => {
          return (
            <List
              task={task.description}
              status={task.status}
            />

          );
        })
        }
      </div>
    )
  }
}

export default App;