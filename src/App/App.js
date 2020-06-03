import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Route } from 'react-router-dom';
import News from '../Main/News/News';
import Music from '../Main/Music/Music';
import Notification from '../Main/Notification/Notification';
import Settings from '../Main/Settings/Settings';
import DialogsContainer from '../Main/Dialogs/DialogsContainer';
import NavbarContainer from '../Navbar/NavbarContainer';
import UsersContainer from '../Main/Users/UsersContainer';
import ProfileContainer from '../Main/Profile/ProfileContainer';

const App = (props) => {
  let ProfileComponent = () => <ProfileContainer /*store={props.store}*/ />;
  let DialogsComponent = () => <DialogsContainer />;
  let NewsComponent = () => <News />;
  let MusicComponent = () => <Music />;
  let UsersComponent = () => <UsersContainer />
  /*let NotificationComponent = () => <Notification />;
  let SettingsComponent = () => <Settings />;*/

  return (
    <div className='app_wrapper'>
      <Header />
      <div className='main'>
        <Route path='/profile' render={ProfileComponent} />
        <Route path='/dialogs' render={DialogsComponent} />
        <Route path='/users' render={UsersComponent} />
        <Route path='/news' render={NewsComponent} />
        <Route path='/music' render={MusicComponent} />
        <Route path='/notification' render={() => <Notification />} />
        <Route path='/settings' component={Settings} />
      </div>
      <NavbarContainer store={props.store} />
      <Footer />
    </div>
  );
}

export default App;
