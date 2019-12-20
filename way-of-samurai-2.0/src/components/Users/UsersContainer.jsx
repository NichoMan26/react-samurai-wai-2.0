
import React from 'react'
import {connect} from 'react-redux'
import Users from './Users'
import Preload from './../Preload/Preload'
import { followSuccess, unFollowSuccess, setCurrentPage, 
    setToggleFetching, toggleFollowingProgress, getUsers,
    follow, unFollow} from './../../redux/users-reducer'

class UsersContainer extends React.Component{
    
    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize)
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
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, { followSuccess, unFollowSuccess, 
    setCurrentPage, setToggleFetching, toggleFollowingProgress,  getUsers,
    follow, unFollow} )(UsersContainer);