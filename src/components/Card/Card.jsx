import React from 'react';
import logo from '../Logo/Logo'

function Card({ title, text }) {
    return (
      <div className="card text-bg-dark">
        <img src={logo} alt="Card Image" className="my-5 p-5 img-fluid" />
        <div className="card-img-overlay">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    );
  }
  
  export default React.memo(Card)