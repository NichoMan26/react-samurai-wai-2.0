import React from 'react';
import {updateNewPostActionCreator, addPostActionCreator} from './../../../redux/profile-reducer'

import MyPosts from './MyPosts'
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {
    
    return(
        <StoreContext.Consumer>{
            (store) => {
                let onAddPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                let onPostChange = (text) => {
                    store.dispatch(updateNewPostActionCreator(text))
                }
                let state = store.getState()
                return(
                <MyPosts updateNewPostText={onPostChange}
                    addPost={onAddPost}
                    myPosts={state.profilePage.myPosts}
                    newPostText={state.profilePage.newPostText}/>)
                }   
            }
            
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;