import React from 'react';
import './App.css';
import Footer from '../Footer/Footer';
import { Route, withRouter } from 'react-router-dom';
import News from '../Main/News/News';
import Music from '../Main/Music/Music';
import Notification from '../Main/Notification/Notification';
import Settings from '../Main/Settings/Settings';
import DialogsContainer from '../Main/Dialogs/DialogsContainer';
import NavbarContainer from '../Navbar/NavbarContainer';
import UsersContainer from '../Main/Users/UsersContainer';
import ProfileContainer from '../Main/Profile/ProfileContainer';
import HeaderContainer from '../Header/HeaderContainer';
import LoginContainer from '../Login/LoginContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeThunk } from '../redux/app-reducer';
import Preloader from '../common/preloader/Preloader';
import store from '../redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeThunk();
  }

  render() {
    let ProfileComponent = () => <ProfileContainer /*store={props.store}*/ />;
    let DialogsComponent = () => <DialogsContainer />;
    let NewsComponent = () => <News />;
    let MusicComponent = () => <Music />;
    let UsersComponent = () => <UsersContainer />
    let LoginComponent = () => <LoginContainer />
    /*let NotificationComponent = () => <Notification />;
    let SettingsComponent = () => <Settings />;*/

    if (!this.props.initialized) return <Preloader />

    return (
      <div className='app_wrapper'>
        <HeaderContainer />
        <div className='main'>
          <Route path='/profile/:userId?' render={ProfileComponent} />
          <Route path='/dialogs' render={DialogsComponent} />
          <Route path='/users' render={UsersComponent} />
          <Route path='/news' render={NewsComponent} />
          <Route path='/music' render={MusicComponent} />
          <Route path='/notification' render={() => <Notification />} />
          <Route path='/settings' component={Settings} />
          <Route path='/login' component={LoginComponent} />
        </div>
        <NavbarContainer store={this.props.store} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ initialized: state.appReducer.initialized })

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeThunk })
)(App);

let MainApp = (props) => {
  return <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer store={store} />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
}

export default MainApp
