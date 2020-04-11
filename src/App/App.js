import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Content from '../Main/Content';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div className='app_wrapper'>
      <Header />
      <Content />
      <Navbar />
      <Footer />

    </div>
  );
}

export default App;
