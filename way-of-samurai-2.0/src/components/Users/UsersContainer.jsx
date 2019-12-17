
import React from 'react'
import {connect} from 'react-redux'
import * as axios from 'axios'
import Users from './Users'
import Preload from './../Preload/Preload'
import { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleFetching} from './../../redux/users-reducer'

class UsersContainer extends React.Component{
    
    componentDidMount(){
        this.props.setToggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(responce=>{
            this.props.setUsers(responce.data.items)
            this.props.setTotalUsersCount(responce.data.totalCount)
            this.props.setToggleFetching(false)
        })
    }
    onPageChanged = (currentPage) => {
        this.props.setToggleFetching(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
        .then(responce=>{
            this.props.setUsers(responce.data.items)
            this.props.setToggleFetching(false)
           
        })
    }
    render(){
        return <>{this.props.isFetching ? <Preload/> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}   
                currentPage={this.props.currentPage}  
                users={this.props.users} 
                onPageChanged={this.onPageChanged} 
                follow={this.props.follow} 
                unFollow={this.props.unFollow} 
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
        isFetching:state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleFetching} )(UsersContainer);