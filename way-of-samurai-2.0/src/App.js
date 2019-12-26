import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import {Route, withRouter} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/Login';
import {connect} from 'react-redux'
import { compose } from 'redux';
import {initializeApp} from './redux/app-reducer'
import Preload from './components/Preload/Preload';

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
                    render={() => <ProfileContainer />}/>
            <Route path='/dialogs' 
                    render={() => <DialogsContainer />}/>
            <Route path='/users' 
                    render={() => <UsersContainer/>}/>
            <Route path='/login' 
                    render={() => <LoginPage/>}/>
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