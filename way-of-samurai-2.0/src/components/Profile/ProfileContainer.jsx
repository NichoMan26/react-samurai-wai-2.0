import React from 'react';
import Profile from './Profile';
import {getUserProfile} from './../../redux/profile-reducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


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
const dispatchMapToProps = (state) => {
 return{
    userProfile:state.profilePage.userProfile
 }
}

let WithURLDataProfileContainer = withRouter(ProfileContainer)

export default connect(dispatchMapToProps,{getUserProfile})(WithURLDataProfileContainer);