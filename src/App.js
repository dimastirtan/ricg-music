import React, { useState, useEffect } from 'react';
import logo from './assets/Rich-Music-B.png';
import './App.css';
import api from './api/axios'; // Import Axios instance untuk API calls

function Logo() {
  return (
    <a className="navbar">
      <img src={logo} alt="Logo" style={{ width: "150px", height: "auto", filter: "invert(100%)" }} />
    </a>
  );
}

function Banner() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black" style={{ height: "100px" }}>
      <div className="container-fluid">
        <WalkingText />
      </div>
    </nav>
  );
}

function WalkingText() {
  return (
    <div className="marquee">
      <div className="marquee-text">
        Berita-berita musik terbaru ada di sini
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <div className="row">
            <div className="col-md-4">
              <Logo />
            </div>
            <div className="col-md-8"></div>
          </div>
        </a>
      </div>
    </nav>
  );
}

function SubNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">

        {/* Navbar toggler for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Home */}
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>

            {/* News */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                News
              </a>
            </li>

            {/* Dropdown menu */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Search form */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

function RowCards() {
  const [cards, setCards] = useState([]);

  return (
    <div className="container">
      <div className="row mt-3">
        {cards.map((card, index) => (
          <div className="col-md-6" key={index}>
            <Card title={card.title} text={card.text}  />
          </div>
        ))}
      </div>
      {/* Row untuk menampilkan 2 Card Khusus di sebelah kanan */}
      <div className="row mt-3">
        <div className="col-md-8">
          <div className="row">
            {cards.slice(0, 2).map((card, index) => (
              <div className="col-md-6" key={index}>
                <SpecialCard title={card.title} text={card.text}  />
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

function Card({ title, text }) {
  return (
    <div className="card text-bg-dark">
      <img src={logo} alt="Card Image" className="my-5 p-5 img-fluid" /> {/* Gambar default */}
      <div className="card-img-overlay">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>

      </div>
    </div>
  );
}

function SpecialCard({ title, text }) {
  return (
    <div className="card text-bg-dark mb-3">
      <div className="card-header bg-danger">
        <b>EXCLUSIVE</b>
      </div>
      <img src={logo} alt="Special Card Image" className="my-5 p-5 img-fluid" /> {/* Gambar default */}
      <div className="card-img-overlay mt-5">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>

      </div>
    </div>
  );
}

function LongCard() {
  return (
    <div className="row">
      <div className="col-md-8">
        <Card />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="container bg-light">
      <SubNav />
      <div className="row">
        <div className="col-md-8">
          <Carousel />
        </div>
        <div className="col-md-4 mt-3">
          <SmallCarousel />
        </div>
      </div>
      <RowCards />
      <div className="mt-3">
        <LongCard />
      </div>
      <Footer />
    </div>
  );
}

function SmallCarousel() {
  return (
    <div className="card-header bg-danger">
      <div className="card-title bg-danger">
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
}

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
        <div className="carousel-item">
          <img src={logo} alt="Small Slide 3" className="my-5 p-5 img-fluid" />
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

function Footer() {
  return (
    <footer className="bg-dark text-light p-4 mt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center text-md-start">
            <h5>About Us</h5>
            <p>
              Rich Music adalah platform berita musik terdepan yang menyediakan
              informasi terbaru dan ulasan musik favorit Anda.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#news" className="text-light text-decoration-none">
                  News
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#about" className="text-light text-decoration-none">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <h5>Follow Us</h5>
            <div>
              <a href="https://www.facebook.com/richmusiconline" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://x.com/richmusiconline" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.instagram.com/richmusiconline/" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCBC_ymsb8NEIUsShzxuuixw" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="https://www.tiktok.com/@richmusiconline" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <i className="bi bi-tiktok"></i>
              </a>
              <a href="https://www.threads.net/@richmusiconline" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <i className="bi bi-threads"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-light" />
        <div className="text-center">
          <p className="m-0">Copyright &copy; 2023 Rich Music. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function MyApp() {
  return (
    <div className="App bg-black">
      <Banner />
      <Navbar />
      <Container />
    </div>
  );
}

export default MyApp;
