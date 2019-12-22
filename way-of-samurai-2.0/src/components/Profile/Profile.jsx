import React from 'react';

import cls from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
    return(
        <div className={cls.profile}>
           <ProfileInfo userProfile={props.userProfile} status={props.status} updateStatus={props.updateStatus}/>
           <MyPostsContainer />
        </div>
    )
}
export default Profile;