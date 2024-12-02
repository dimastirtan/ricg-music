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
        Berita-berita musik terbaru ada disini
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
            <div className="col-md-8">
            </div>
          </div>
        </a>
      </div>
    </nav>
  );
}

function Card() {
  return (
    <div className="card text-bg-dark mt-3">
      <img src={logo} alt="Small Slide 1" className="my-5 p-5 img-fluid" />
      <div className="card-img-overlay">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small>Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
}

function RowCards() {
  return (
    <div className="row mt-3">
      <div className="col-md-6">
        <Card />
      </div>
      <div className="col-md-6">
        <Card />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="container bg-light">
      <div className="row">
        <div className="col-md-8">
          <Carousel />
        </div>
        <div className="ms-3 mt-3" style={{ width: "30%" }}>
          <SmallCarousel />
        </div>
      </div>
      <RowCards /> {/* Added row of 2 cards */}
      <div className="mt-3">
        <Card /> {/* Added 1 card below small carousel */}
      </div>
    </div>
  );
}

function SmallCarousel() {
  return (
    <div className="card-header">
      <div className="card-header">
        <h2>EXCLUSIVE</h2>
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
