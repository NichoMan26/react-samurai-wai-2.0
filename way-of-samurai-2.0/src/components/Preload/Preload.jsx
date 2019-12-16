import React from 'react'
import loader from './../../../src/assets/img/loader.gif'
import cls from './Preload.module.css'

const Preload = (props) => {
    return <div className={cls.wrapper}>
        <img src={loader} alt="preload"/>
    </div>
}
export default Preload