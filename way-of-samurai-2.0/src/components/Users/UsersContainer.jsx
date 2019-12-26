
import React from 'react'
import {connect} from 'react-redux'
import Users from './Users'
import Preload from './../Preload/Preload'
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from './../../redux/users-selectors'
import { followSuccess, unFollowSuccess, setCurrentPage, 
    setToggleFetching, toggleFollowingProgress, requestUsers,
    follow, unFollow} from './../../redux/users-reducer'

class UsersContainer extends React.Component{
    
    componentDidMount(){
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (currentPage) => {
        this.props.requestUsers(currentPage, this.props.pageSize)
    }
    render(){
        return <>{this.props.isFetching ? <Preload/> : null}
        <Users  totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}   
                currentPage={this.props.currentPage}  
                users={this.props.users} 
                onPageChanged={this.onPageChanged} 
                follow={this.props.follow} 
                unFollow={this.props.unFollow}
                followingInProgress={this.props.followingInProgress}
                />
             </>
    }
}

let mapStateToProps = (state) => {
    return{
        users: getUsers(state),
        pageSize:getPageSize(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFetching:getIsFetching(state),
        followingInProgress:getFollowingInProgress(state),
    }
}

export default connect(mapStateToProps, { followSuccess, unFollowSuccess, 
    setCurrentPage, setToggleFetching, toggleFollowingProgress,  requestUsers,
    follow, unFollow} )(UsersContainer);