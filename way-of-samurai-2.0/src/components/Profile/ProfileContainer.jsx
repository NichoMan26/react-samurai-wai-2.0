import React from 'react';
import Profile from './Profile';
import {compose} from 'redux'
import {getUserProfile, getStatus, updateStatus, savePhoto} from './../../redux/profile-reducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


 class ProfileContainer extends React.Component {
   refreshProfile(){
      let userId = this.props.match.params.userId
      if(!userId){
          userId = this.props.myUserId
          if(!userId){
             this.props.history.push('/login')
          }
      }
      this.props.getUserProfile(userId)
      this.props.getStatus(userId)
    }
    componentDidMount(){
      this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.match.params.userId !== prevProps.match.params.userId ) {
          this.refreshProfile();
      }
  }
     render(){
        return <Profile {...this.props} 
               isOwner={!this.props.match.params.userId} 
               savePhoto={this.props.savePhoto}/>
     }
}
const mapStateToProps = (state) => {
   return{
      userProfile:state.profilePage.userProfile,
      status:state.profilePage.status,
      myUserId:state.auth.id,
      isAuth: state.auth.isAuth,
   }
  }


export default compose(
   connect(mapStateToProps,{getUserProfile, getStatus, updateStatus, savePhoto}),
   withRouter,
   //withAuthRedirect,
)(ProfileContainer)