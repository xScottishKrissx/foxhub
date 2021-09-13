// import logo from './logo.svg';
import React from 'react';
import './App.css';

import Header from './images/sections/section1/Header';
import BrandNewProducts from './images/sections/section2/brandNewProducts';
import WebsiteContentInfo from './images/sections/section3/websiteContentInfo';
import Review from './images/sections/section4/review';
import NewsletterSignUp from './images/sections/section5/newsletterSignUp';
import Footer from './images/sections/section6/footer';


function App() {

  return (
    <div className="App" >
      <Header />
      <BrandNewProducts />
      <WebsiteContentInfo />
      <Review />
      <NewsletterSignUp />
      <Footer />
    </div>
    
  );
}

export default App;
