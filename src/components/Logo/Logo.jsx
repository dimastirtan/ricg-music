import React from 'react';
import logo from '../../assets/Rich-Music-B.png';

function Logo() {
    return (
      <a className="navbar">
        <img src={logo} alt="Logo" style={{ width: "150px", height: "auto", filter: "invert(100%)" }} />
      </a>
    );
  }

  export default Logo;