import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import {Route, withRouter} from 'react-router-dom'

import LoginPage from './components/Login/Login';
import {connect} from 'react-redux'
import { compose } from 'redux';
import {initializeApp} from './redux/app-reducer'
import Preload from './components/Preload/Preload';
import { withSuspense } from './hoc/withSuspense';

// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import ('./components/Users/UsersContainer'))
const ProfileContainer = React.lazy(() => import ('./components/Profile/ProfileContainer'))

class App extends React.Component{
  componentDidMount() {
    this.props.initializeApp();
}
  render(){
    if(!this.props.initialized){
      return <Preload/>
    }
    return ( 
        <div className = 'wrapper' >
          <HeaderContainer / >
          <Nav / >
          <div className='content'>
            <Route path='/profile/:userId?' 
                    render={withSuspense(ProfileContainer)}/>
            <Route path='/dialogs' 
             render={withSuspense(DialogsContainer)}/>
            <Route path='/users' 
                      render={withSuspense(UsersContainer)}/>
            <Route path='/login'   
              render={withSuspense(LoginPage)}/>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
  })
export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);