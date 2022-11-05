import React from 'react'
import { Link } from 'react-router-dom'

const Task = (props) => {
  return (
  <tr>
    <td>{props.task.username}</td>
    <td>{props.task.description}</td>
    <td>{props.task.duration}</td>
    <td>{props.task.date.substring(0,10)}</td>
    <td>
      <span><Link to={`/edit/${props.task._id}`}> <button className='btn btn-info m-1'>Update</button> </Link></span><span><Link onClick={() => { props.deleteTask(props.task._id) }}> <button className='btn btn-danger m-1'>Delete</button> </Link></span>
    </td>
  </tr>
  )
}

export default Task
