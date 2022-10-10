import React from 'react';
import AboutDropdown from '../components/AboutDropdown';
import Banner from '../components/Banner';

import Footer from '../components/Footer';
import Header from '../components/Header';

const About = () => {
    return (
      <div>
        <Header/>
        <Banner/>
        <AboutDropdown/>
       
        <Footer/>
      </div>
    );
};

export default About;