import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

class NavBar extends Component {
  state = {  } 
  render() { 
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to='/' className='navbar-brand'>TaskTracker</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to='/' className='nav-link'>Tasks</Link>
            </li>
            <li className="nav-item">
              <Link to='/create' className='nav-link'>Create task</Link>
            </li>
            <li className="nav-item">
              <Link to='/user' className='nav-link'>Create User</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
 
export default NavBar;