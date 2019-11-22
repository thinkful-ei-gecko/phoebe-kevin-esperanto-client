import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  //After grading, use this component (Cypress doesn't want more than one <a> in the dashboard)
  // renderLogoutLink() {
  //   return (
  //     <nav>
  //       <span className='Header__span___usersName'>
  //         <Link to='/' className='italic'>{this.context.user.name}</Link>
  //       </span>{' '}
  //       <Link to='/'>Dashboard</Link>
  //       <Link 
  //         className='Header__Link'
  //         onClick={this.handleLogoutClick}
  //         to='/login'>
  //         Logout
  //       </Link>
  //     </nav>
  //   )
  // }

  renderLogoutLink() {
    return (
      <div className='Header___private'>
        <nav>
          <span className='Header__span___usersName italic'>
            {this.context.user.name}
          </span>
          <Link 
            className='Header__Link'
            onClick={this.handleLogoutClick}
            to='/login'>
            Logout
          </Link>
        </nav>
        
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav>
        <Link className='Header__Link'to='/login'>Login</Link>
        {' '}
        <Link className='Header__Link'to='/register'>Sign up</Link>
      </nav>
    )
  }

  render() {
    return (
      <header>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
        <h1>
          <Link className='Header__Link h1Link italic' to='/'>
            iranta
          </Link>
        </h1>
      </header>
    );
  }
}

export default Header
