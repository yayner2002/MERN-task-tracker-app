import React, { Component } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateTask extends Component {
  constructor(props) {
    super(props);

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
    this.setState({
      username: "test user",
      users: ["test user"],
    });
  }

  onchangeUsername(e) {
    this.setState({
      username: e.targer.value,
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
    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create a New Task</h3>
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
              <button type="submit" className="btn btn-primary">
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateTask;
