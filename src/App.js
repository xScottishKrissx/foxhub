// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './sections/section1/Header';
import BrandNewProducts from './sections/section2/brandNewProducts';
import WebsiteContentInfo from './sections/section3/websiteContentInfo';
import Review from './sections/section4/review';
import NewsletterSignUp from './sections/section5/newsletterSignUp';
import Footer from './sections/section6/footer';


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
