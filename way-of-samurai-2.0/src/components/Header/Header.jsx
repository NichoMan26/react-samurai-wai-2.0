import React from 'react';
import cls from './Header.module.css'

import logo from './../../assets/img/logo.png'

const Header = () => {
    return(
        <header className={cls.header}>
           <a href="/"><img className={cls.logo} src={logo} alt="logo"/></a>
        </header>
    )
}
export default Header;