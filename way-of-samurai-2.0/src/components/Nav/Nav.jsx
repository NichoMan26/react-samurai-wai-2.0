import React from 'react';
import cls from './Nav.module.css'

const Nav = () => {
    return(
        <header className={cls.nav}>
           <ul className={cls.ul}>
                <li className={cls.li}>Profile</li>
                <li className={cls.li}>Messages</li>
                <li className={cls.li}>3</li>
                <li className={cls.li}>4</li>
           </ul>
        </header>
    )
}
export default Nav;