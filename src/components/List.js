import React, { Component } from 'react'
import Task from './Task'
class List extends Component {
    render() {

        return (
            <div>

                {

                    this.props.tasks.map((task, i) => {
                        return (
                            <Task
                                description={task.description}
                                status={task.status}
                                index={i}
                                modifyTask={this.props.modifyTask}
                                deleteTask={this.props.deleteTask}
                            />
                        )
                    })
                }
            </div >

        )
    }
}
export default List
