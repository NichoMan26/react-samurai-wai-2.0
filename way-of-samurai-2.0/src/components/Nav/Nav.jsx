import React from 'react';
import cls from './Nav.module.css'
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return(
        <header className={cls.nav}>
           <ul className={cls.ul}>
                <li className={cls.li}><NavLink className={cls.link} to='/profile' activeClassName={cls.active}>Profile</NavLink></li>
                <li className={cls.li}><NavLink className={cls.link} to='/dialogs'  activeClassName={cls.active}>Messages</NavLink></li>
                <li className={cls.li}><NavLink className={cls.link} to='/users'  activeClassName={cls.active}>Users</NavLink></li>
                <li className={cls.li}><NavLink className={cls.link} to='/4'  activeClassName={cls.active}>4</NavLink></li>
           </ul>
        </header>
    )
}
export default Nav;