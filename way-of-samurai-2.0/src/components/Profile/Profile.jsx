import React from 'react';

import cls from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
    return(
        <div className={cls.profile}>
           <ProfileInfo/>
           <MyPosts/>
        </div>
    )
}
export default Profile;