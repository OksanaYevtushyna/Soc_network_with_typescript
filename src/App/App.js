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

const App = (props) => {
  let ProfileComponent = () => <Profile postsData={props.postsData} />;
  let DialogsComponent = () => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />;
  let NewsComponent = () => <News />;
  let MusicComponent = () => <Music />;
  /*let NotificationComponent = () => <Notification />;
  let SettingsComponent = () => <Settings />;*/


  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header />
        <div className='main'>
          <Route path='/profile' render={ProfileComponent} />
          <Route path='/dialogs' render={DialogsComponent} />
          <Route path='/news' render={NewsComponent} />
          <Route path='/music' render={MusicComponent} />
          <Route path='/notification' render={() => <Notification />} />
          <Route path='/settings' component={Settings} />
        </div>
        <Navbar />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
