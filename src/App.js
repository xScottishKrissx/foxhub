// import logo from './logo.svg';
import React from 'react';
import './App.css';

import Header from './sections/section1/Header';
import TopFoxes from './sections/section2/topFoxes';
import WebsiteContentInfo from './sections/section3/websiteContentInfo';
import FoxFriends from './sections/section4/FoxFriends';
import NewsletterSignUp from './sections/section5/newsletterSignUp';
import Footer from './sections/section6/footer';


function App() {

  return (
    <div className="App" >
      <Header />
      <TopFoxes />
      <WebsiteContentInfo />
      <FoxFriends />
      <NewsletterSignUp />
      <Footer />
    </div>
    
  );
}

export default App;
