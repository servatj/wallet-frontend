import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(props) {
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
        Wallet
      </Link>
      <button className='btn btn-primary right' onClick={() => props.logout()}>Log Out</button>
    </nav>
  );
}

export default NavBar;
