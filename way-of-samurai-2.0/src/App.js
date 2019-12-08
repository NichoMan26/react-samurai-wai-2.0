import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom'

const App = () => {
  return ( 
    <BrowserRouter>
      <div className = 'wrapper' >
        <Header / >
        <Nav / >
        <div className='content'>
          <Route path='/profile' component={Profile}/>
          <Route path='/dialogs' component={Dialogs}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;