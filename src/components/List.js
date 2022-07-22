import React, { Component } from 'react'
import Task from './Task'
class List extends Component {
    render() {

        return (
            <div>

                {

                    this.props.tasks.map(task => {
                        return (
                            <Task
                                description={task.description}
                                status={task.status}
                            />
                        )
                    })
                }
            </div >

        )
    }
}
export default List
