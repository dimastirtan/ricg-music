import React from 'react';

const WalkingText = () => {
    return (
      <div className="marquee">
        <div className="marquee-text">
          Berita-berita musik terbaru ada di sini
        </div>
      </div>
    );
  }

const Banner = () => {
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

  export default Banner;