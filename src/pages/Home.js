import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { DataApi } from '../context/DataApi';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <DataApi>
        <Card />
      </DataApi>
      <Footer />
    </div>
  );
};

export default Home;
