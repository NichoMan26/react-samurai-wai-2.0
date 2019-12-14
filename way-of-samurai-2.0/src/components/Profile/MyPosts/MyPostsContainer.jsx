import {updateNewPostActionCreator, addPostActionCreator} from './../../../redux/profile-reducer'

import {connect} from 'react-redux'
import MyPosts from './MyPosts'

let mapStateToProps = (state) => {
return {
    myPosts: state.profilePage.myPosts,
    newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
           dispatch(updateNewPostActionCreator(text))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;