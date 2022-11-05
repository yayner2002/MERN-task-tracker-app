import React, { Component } from 'react'

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onchangeUsername = this.onchangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      username: "",
    };
  }

  onchangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }


  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };

    console.log(user);


    this.setState({
      username:''
    })
  }




  render() { 
    return (
    <div>
      <h3>Create a New User</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text"  onChange={this.onchangeUsername}
              value={this.state.username} required className='form-control' />
        </div>

        <div className="form-group">
          <input type="submit" value="Create User" className='btn btn-primary' />
        </div>
      </form>
    </div>

    );
  }
}
 
export default CreateUser;