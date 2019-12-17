import React from 'react';
import * as axios from 'axios'
import Profile from './Profile';
import {setUserProfile} from './../../redux/profile-reducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


 class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 5242
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(responce=>{
            this.props.setUserProfile(responce.data)
        })
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

export default connect(dispatchMapToProps,{setUserProfile})(WithURLDataProfileContainer);