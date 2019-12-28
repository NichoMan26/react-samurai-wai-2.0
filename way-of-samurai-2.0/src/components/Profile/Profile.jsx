import React from 'react';

import cls from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
    return(
        <div className={cls.profile}>
           <ProfileInfo 
            isOwner={props.isOwner} 
            userProfile={props.userProfile} 
            status={props.status} 
            updateStatus={props.updateStatus}
            savePhoto={props.savePhoto}/>
           <MyPostsContainer />
        </div>
    )
}
export default Profile;