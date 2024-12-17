import React from 'react';
import Banner from './components/Header/Banner';
import Navbar from './components/Header/Navbar';
import SubNav from './components/Header/SubNav';
import Carousel from './components/Carousel/Carousel';
import SmallCarousel from './components/Carousel/SmallCarousel';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import './App.css';
import ExclusiveCardList from './components/Card/ExclusiveCardList';

function Container() {
  return (
    <div className="container bg-light pb-3">
      <div className="row">
        <div className="col-md-8">
          <Carousel />
      <span>
            <h1 className="text-center bg-danger mt-3 py-3 col-md-12">TOP TRENDING</h1>
      </span>
      <Card />
        </div>
        <div className="col-md-4 mt-3">
          <SmallCarousel />
          <ExclusiveCardList />
        </div>
      </div>
    </div>
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
