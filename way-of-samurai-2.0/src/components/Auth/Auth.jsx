import React from 'react'
import { NavLink } from 'react-router-dom';
import cls from './Auth.module.css'
import userDef from './../../assets/img/userDef.png'

const Auth = (props) =>{

    return(
            <>
            {props.isAuth
            ? 
            <NavLink  to={`/profile`}>
                <div className={cls.wrapper}>
                    <img className={cls.img} src={userDef} alt=""/>
                    <p className={cls.login}>{props.login}  </p>  
                </div>
            </NavLink>
            :
            <NavLink className={cls.wrapper} to={'/login/'}>
               <p className={cls.login}>Login</p>  
            </NavLink>
            }
            </>
    )
}
export default Auth