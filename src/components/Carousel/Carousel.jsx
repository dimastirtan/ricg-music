import react from 'react';
import logo from '../../assets/Rich-Music-B.png';

function Carousel() {
    return (
      <div id="carouselExampleAutoplaying" className="carousel slide bg-secondary mt-3" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={logo} alt="Small Slide 1" className="my-5 p-5 img-fluid" />
          </div>
          <div className="carousel-item">
            <img src={logo} alt="Small Slide 2" className="my-5 p-5 img-fluid" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }

  export default react.memo(Carousel);