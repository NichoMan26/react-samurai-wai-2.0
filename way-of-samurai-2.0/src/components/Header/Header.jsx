import React from 'react';
import cls from './Header.module.css'
import Auth from './../Auth/Auth'

import logo from './../../assets/img/logo.png'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return(
        <header className={cls.header}>
            <NavLink to="/profile"><img className={cls.logo} src={logo} alt="logo"/></NavLink>
            <Auth login={props.login} logout={props.logout} isAuth={props.isAuth} id={props.id}/>
        </header>
    )
}
export default Header;