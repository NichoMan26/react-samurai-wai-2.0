import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import {Route, BrowserRouter} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/Login';

const App = (props) => {
  return ( 
    <BrowserRouter>
      <div className = 'wrapper' >
        <HeaderContainer / >
        <Nav / >
        <div className='content'>
          <Route path='/profile/:userId?' 
                  render={() => <ProfileContainer />}/>
          <Route path='/dialogs' 
                  render={() => <DialogsContainer />}/>
          <Route path='/users' 
                  render={() => <UsersContainer/>}/>
          <Route path='/login' 
                  render={() => <LoginPage/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;