import React from 'react';

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

  export default React.memo(Footer);