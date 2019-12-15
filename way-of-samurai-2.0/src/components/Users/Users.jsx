import React from 'react'
import cls from './Users.module.css'
import * as axios from 'axios'
import userDef from './../../assets/img/userDef.png'


const Users = (props) => {
    if(props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(responce=>{
            props.setUsers(responce.data.items)
        })
    }
    
    return <div className={cls.wrapper}>
        
       <ul>
            {props.users.map((el) => {
            
            return <li className={cls.user} key={el.id}>
                <div className={cls.imgWrapper}>
                    <img className={cls.avatar} src={el.photos.small != null ? el.photos.small : userDef} alt="avatar"/>
                    {el.followed ? <button onClick={() => {props.unFollow(el.id)}} className={cls.button}>Unfollow</button> : 
                        <button onClick={() => {props.follow(el.id)}} className={cls.button}>Follow</button>}
                </div>
                <div className={cls.wrapperText}>
                    <p>
                        <span className={cls.name}>{el.name}:</span>
                        <span className={cls.status}>{el.status}</span>
                    </p>
                    
                </div>
            </li>
            
            })}
         </ul> 
    </div>
}
export default Users;