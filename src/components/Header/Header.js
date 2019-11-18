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

  renderLogoutLink() {
    return (
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
    )
  }

  // if needed for ReferenceError, this is the old renderLogoutLink
  // renderLogoutLink() {
  //   return (
  //     <div className='Header___private'>
  //       <nav>
  //         <Link 
  //           className='Header__Link'
  //           onClick={this.handleLogoutClick}
  //           to='/login'>
  //           Logout
  //         </Link>
  //       </nav>
  //       <span>
  //         {this.context.user.name}
  //       </span>
  //     </div>
  //   )
  // }

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
          <Link className='Header__Link'to='/'>
            Spaced repetition
          </Link>
        </h1>
      </header>
    );
  }
}

export default Header
