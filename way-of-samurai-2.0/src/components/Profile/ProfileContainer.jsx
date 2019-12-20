import React from 'react';
import Profile from './Profile';
import {getUserProfile} from './../../redux/profile-reducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {withAuthRedirect} from './../../hoc/withAuthRedirct'


 class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 5242
        }
        this.props.getUserProfile(userId)
        
    }
     render(){
        return <Profile {...this.props}/>
     }
}
let AuthRedirectContainer = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state) => {
   return{
      userProfile:state.profilePage.userProfile,
   }
  }

let WithURLDataProfileContainer = withRouter(AuthRedirectContainer)

export default connect(mapStateToProps,{getUserProfile})(WithURLDataProfileContainer);