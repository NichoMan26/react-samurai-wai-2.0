import {addPostActionCreator} from './../../../redux/profile-reducer'

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
        addNewPost: (newPostBody) => {
            dispatch(addPostActionCreator(newPostBody))
        },
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;