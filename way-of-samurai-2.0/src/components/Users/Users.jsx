import React from 'react'
import cls from './Users.module.css'
import userDef from './../../assets/img/userDef.png'
import {NavLink} from 'react-router-dom'

const Users = (props) =>{
    let countPages = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = []
    for(let i = 1; i <= countPages; i++){
        pages.push(i)
    }
    return <div className={cls.wrapper}>
    <ul className={cls.pagination}>
    {pages.map((el)=>{
        return <li onClick={()=>{props.onPageChanged(el)}}
                    key={el} 
                    className={el === props.currentPage 
                        ? `${cls.pagination__item_active} ${cls.pagination__item}` 
                        : cls.pagination__item}>{el}</li>
    })}
    </ul>
    <ul>
    {props.users.map((el) => {
    
    return <li className={cls.user} key={el.id}>
        <div className={cls.imgWrapper}>
            <NavLink to={'/profile/' + el.id}>
                <img className={cls.avatar} src={el.photos.small != null ? el.photos.small : userDef} alt="avatar"/>
            </NavLink>
            {el.followed ? <button onClick={() => {props.unFollow(el.id)}} className={cls.button}>Unfollow</button> : 
                <button onClick={() => {props.follow(el.id)}} className={cls.button}>Follow</button>}
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