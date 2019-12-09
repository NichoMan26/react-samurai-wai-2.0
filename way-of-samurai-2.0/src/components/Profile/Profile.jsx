import React from 'react';

import cls from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
const Profile = (props) => {

    return(
        <div className={cls.profile}>
           <ProfileInfo />
           <MyPosts addPost={props.addPost}
                    myPosts={props.profilePage.myPosts} 
                    newPostText={props.profilePage.newPostText}
                    updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}
export default Profile;