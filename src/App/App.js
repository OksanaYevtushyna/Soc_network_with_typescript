import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Profile from '../Main/Profile/Profile';
import Dialogs from '../Main/Dialogs/Dialogs'
import { Route } from 'react-router-dom';
import News from '../Main/News/News';
import Music from '../Main/Music/Music';
import Notification from '../Main/Notification/Notification';
import Settings from '../Main/Settings/Settings';

const App = (props) => {
  let ProfileComponent = () => <Profile state={props.state.profilePage} dispatch={props.dispatch} /*addPost={props.addPost} enterNewPost={props.enterNewPost}*/ />;
  let DialogsComponent = () => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch} /*sentMessage={props.sentMessage} createMessage={props.createMessage}*/ />;
  let NewsComponent = () => <News />;
  let MusicComponent = () => <Music />;
  /*let NotificationComponent = () => <Notification />;
  let SettingsComponent = () => <Settings />;*/

  return (
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
      <Navbar state={props.state.navbar} />
      <Footer />
    </div>
  );
}

export default App;
