import React, { Component } from 'react'
import axios from 'axios'
import Task from './Task'


class TaskList extends Component {
  constructor(props) {
    super(props)

    this.deleteTask = this.deleteTask.bind(this)
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    const endPoint = `http://localhost:4000/tasks/`
    axios.get(endPoint)
    .then((res) => {
      this.setState({
        tasks: res.data
      })
    })
    .catch((err) => console.log(err))
  }

  deleteTask(id) {
    const endPoint = `http://localhost:4000/tasks/${id}`
    axios.delete(endPoint)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))

    this.setState({
      tasks: this.state.tasks.filter(task => task._id !== id)
    })

  }

  taskList() {
    return this.state.tasks.map((task) => {
      return <Task task = {task} key ={task._id} deleteTask ={this.deleteTask}  />
    })
  }
  render() { 
    return (
    <div>
      <h3>All Tasks</h3>
      <table className='table table-stripe'>
        <thead className='thead-light'>
        <tr>
          <th>Username</th>
          <th>Description</th>
          <th>Duration</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
          {this.taskList()}
        </tbody>
      </table>
    </div>

    );
  }
}
 
export default TaskList;