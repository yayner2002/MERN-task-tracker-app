import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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

  deleteTask() {

  }
  render() { 
    return (
    <div>
      
    </div>

    );
  }
}
 
export default TaskList;