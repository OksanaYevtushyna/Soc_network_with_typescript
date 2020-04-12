import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Profile from '../Main/Profile/Profile';
import Dialogs from '../Main/Dialogs/Dialogs'
import { Route, BrowserRouter } from 'react-router-dom';
import News from '../Main/News/News';
import Music from '../Main/Music/Music';
import Notification from '../Main/Notification/Notification';
import Settings from '../Main/Settings/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header />
        <div className='main'>
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/notification' component={Notification} />
          <Route path='/settings' component={Settings} />
        </div>
        <Navbar />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
