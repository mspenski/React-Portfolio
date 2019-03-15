import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {


  render() {
    return (
      <div>

        <nav className='navbar navbar-expand-lg navbar-light mb-3'>
          <Link className='navbar-brand logo' to='#'>Ωmega Chat</Link>
          <button>
            <span className='navbar-toggler-icon'></span>
          </button>
        </nav>
      </div>
    );
  }
}

export default Nav;
