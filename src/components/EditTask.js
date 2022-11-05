import React, { Component } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'

class EditTask extends Component {
  

  constructor(props) {
    super(props);
    console.log(window.location.pathname.split("/")[2])
    console.log(window.location.pathname)
    console.log(window.location.pathname.split("/")[1])




    this.onchangeUsername = this.onchangeUsername.bind(this);
    this.onchangeDescription = this.onchangeDescription.bind(this);
    this.onchangeDuration = this.onchangeDuration.bind(this);
    this.onchangeDate = this.onchangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/tasks/${window.location.pathname.split("/")[2]}`)
    .then((res) => {
      this.setState({
        username: res.data.username,
        description: res.data.description,
        duration: res.data.duration,
        date: new Date(res.data.date)
      })
    })
    .catch((err) => console.log(err))

    axios.get(`http://localhost:4000/users/`)
    .then((res) => {
      if(res.data.length > 0 ) {
        this.setState({
          users: res.data.map((user) => user.username),
        })
      }
    } )
  }

  onchangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onchangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onchangeDuration(e) {
    this.setState({
      duration: e.target.value,
    });
  }

  onchangeDate(date) {
    this.setState({
      date:date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const task = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    console.log(task);

    axios.post(`http://localhost:4000/tasks/update/${window.location.pathname.split("/")[2]}`, task)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))

    window.location = "/";

    

    
  }

  render() {
    return (
      <div>
        <h3>Update Task</h3>
        <form action="" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <select 
              required
              className="form-control"
              onChange={this.onchangeUsername}
              value={this.state.username}
            >
              {this.state.users.map((user) => {
                return <option key={user} value={user}>{user}</option>
              })
              }
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              className="form-control"
              required
              value={this.state.description}
              onChange={this.onchangeDescription}
            />
          </div>

          <div className="form-group">
            <label htmlFor="duration">Duration (in minutes):</label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onchangeDuration}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <div>
              <Datepicker
                selected={this.state.date}
                onChange={this.onchangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <div>
              <button type="submit" className="btn btn-secondary mt-2">
                Update Task
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}


 
export default EditTask;