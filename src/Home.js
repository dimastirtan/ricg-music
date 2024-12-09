import React, { useState, useEffect } from 'react';
import logo from './assets/Rich-Music-B.png';
import './App.css';

function Logo() {
  return (
    <a className="navbar">
      <img src={logo} alt="Logo" style={{ width: "150px", height: "auto", filter: "invert(100%)" }} />
    </a>
  );
}

function Banner() {
  return (
    <div className="container-fluid bg-black">
      <div className="row">
        <div className="col-md-12">
          <WalkingText />
        </div>
      </div>
    </div>
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
  const [isVisible, setIsVisible] = useState(true);

  return (
    <nav
      className={`navbar navbar-expand-lg bg-black subnav px-5 ${isVisible ? "visible" : "invisible"}`}
      style={{
        transition: "transform 1s ease-in-out",
      }}
    >
      <div className="">
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Articles
          </a>
          <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">News</a></li>
                  <li><a class="dropdown-item" href="#">Review/Bands</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Features
          </a>
          <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Opinion</a></li>
                  <li><a class="dropdown-item" href="#">List</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#Videos">
                Videos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#Distorsikeras">
                Distorsikeras
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#HariMusikKeras">
                Hari Musik Keras
              </a>
            </li>
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Buy Ticket
          </a>
          <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">NORTHMAGZ FEST 2024 POWERED BY DISTORSIKERAS</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#Index">
                Index
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#Podcast">
                Podcast
              </a>
            </li>
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Submission
          </a>
          <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Hari Musik Keras</a></li>
                  <li><a class="dropdown-item" href="#">Pree Relase</a></li>
                  <li><a class="dropdown-item" href="#">Media Partner</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </a>
          <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">About</a></li>
                  <li><a class="dropdown-item" href="#">Privacy Policy</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 bg-dark text-white border-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
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

function RowCards() {
  const cards = [
    { title: "Card 1", text: "normal_card" },
    { title: "Card 2", text: "normal_card" },
    { title: "Card 3", text: "normal_card" },
    { title: "Card 3", text: "normal_card" },
  ];

  // Membagi array menjadi kelompok-kelompok dengan ukuran 2
  const groupedCards = [];
  for (let i = 0; i < cards.length; i += 2) {
    groupedCards.push(cards.slice(i, i + 2));
  }

  return (
    <div className="">
      {groupedCards.map((group, groupIndex) => (
        <div className="row mt-3" key={groupIndex}>
          {group.map((card, cardIndex) => (
            <div className="col-md-4 mb-3" key={cardIndex}>
              <Card title={card.title} text={card.text} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

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

function Container() {
  return (
    <div className="container bg-light pb-3">
      <div className="row">
        <div className="col-md-8">
          <Carousel />
        </div>
        <div className="col-md-4 mt-3">
          <SmallCarousel />
        </div>
      </div>
      <span>
        <h1 className="text-center bg-danger mt-3 py-3 col-md-8">TOP TRENDING</h1>
      </span>
      <div className="row">
        <div className="col-md-12">
          <RowCards />
        </div>
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
    <footer className="bg-dark text-light p-4">
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

function Home() {
  return (
    <div className="App">
      <div className="container">
        <Banner />
        <Navbar />
        <SubNav />
        <Container />
        <Footer />
      </div>
    </div>
  );
}


export default Home;
