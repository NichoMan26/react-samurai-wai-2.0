import React from 'react';

import userDev from './../../../assets/img/userDef.png'
import cls from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div className={cls.wrapper}>
            <img src={userDev} alt="user" />
            <div className={cls.textWrapper}>
                <h1 className={cls.name}>DENIS</h1>
                <p className={cls.status}>I love React</p>
            </div>
        </div>
    )
}
export default ProfileInfo;