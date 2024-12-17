import React from 'react';

function SubNav() {
    return (
      <nav
        className="navbar navbar-expand-lg bg-black subnav px-5 visible" // Set to "visible" directly
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
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Articles
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">News</a></li>
                  <li><a className="dropdown-item" href="#">Review/Bands</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Features
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Opinion</a></li>
                  <li><a className="dropdown-item" href="#">List</a></li>
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
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Buy Ticket
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">NORTHMAGZ FEST 2024 POWERED BY DISTORSIKERAS</a></li>
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
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Submission
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Hari Musik Keras</a></li>
                  <li><a className="dropdown-item" href="#">Pree Relase</a></li>
                  <li><a className="dropdown-item" href="#">Media Partner</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">About</a></li>
                  <li><a className="dropdown-item" href="#">Privacy Policy</a></li>
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

export default SubNav;