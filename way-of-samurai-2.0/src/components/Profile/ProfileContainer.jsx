import React from 'react';
import Profile from './Profile';
import {compose} from 'redux'
import {getUserProfile, getStatus, updateStatus} from './../../redux/profile-reducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


 class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 5242
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
        
    }
     render(){
        return <Profile {...this.props}/>
     }
}
const mapStateToProps = (state) => {
   return{
      userProfile:state.profilePage.userProfile,
      status:state.profilePage.status
   }
  }


export default compose(
   connect(mapStateToProps,{getUserProfile, getStatus, updateStatus}),
   withRouter,
   //withAuthRedirect,
)(ProfileContainer)