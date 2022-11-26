import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <Slider/>
        <Categories />
    </div>
  )
}

export default Home;