import React from 'react'
import cls from './Users.module.css'
import userDef from './../../assets/img/userDef.png'
import {NavLink} from 'react-router-dom'
import Pagination from '../Common/Pagination/Pagination'

const Users = (props) =>{    
    return <div className={cls.wrapper}>
   <Pagination 
   totalUsersCount={props.totalUsersCount}
   pageSize={props.pageSize}
   currentPage={props.currentPage}
   onPageChanged={props.onPageChanged}
   />
    <ul>
    {props.users.map((el) => {
    return <li className={cls.user} key={el.id}>
        <div className={cls.imgWrapper}>
            <NavLink to={'/profile/' + el.id}>
                <img className={cls.avatar} src={el.photos.small != null ? el.photos.small : userDef} alt="avatar"/>
            </NavLink>
            
            {el.followed 
            ? <button disabled={props.followingInProgress
                .some(id => id === el.id)}
                onClick={() => {props.unFollow(el.id)}}
                className={cls.button}>Unfollow</button> 
            : <button disabled={props.followingInProgress
                .some(id => id === el.id)} 
                onClick={() => {props.follow(el.id)}}
                className={cls.button}>Follow</button>}
        </div>
        <div className={cls.wrapperText}>
            <p>
                <span className={cls.name}>{el.name}:</span>
                <span className={cls.status}>{el.status ? el.status : '-----'}</span>
            </p>
            
        </div>
    </li>
    
    })}
</ul> 
</div>
}

export default Users;