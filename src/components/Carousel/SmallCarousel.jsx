import React, { useState, useEffect } from 'react';
import logo from '../../assets/Rich-Music-B.png';
import '../../App.css';

const SmallCarousel = () => {
  const [margin, setMargin] = useState('0 0 17em 0');

  useEffect(() => {
    const savedMargin = localStorage.getItem('cardMargin');
    if (savedMargin) {
      setMargin(savedMargin);
    }
  }, []);

  const handleChangeMargin = (newMargin) => {
    setMargin(newMargin);
    localStorage.setItem('cardMargin', newMargin);
  };

  return (
    <div className="card bg-transparent custom-card" style={{ margin }}>
      <div className="card-header bg-danger">
        <b className="ms-3">EXCLUSIVE</b>
      </div>
      <div id="smallCarousel" className="carousel slide bg-secondary-subtle" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={logo} alt="Small Slide 1" className="my-5 p-5 img-fluid" />
          </div>
          <div className="carousel-item">
            <img src={logo} alt="Small Slide 2" className="my-5 p-5 img-fluid" />
          </div>
          <div className="carousel-item">
            <img src={logo} alt="Small Slide 3" className="my-5 p-5 img-fluid" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#smallCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#smallCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default SmallCarousel;
