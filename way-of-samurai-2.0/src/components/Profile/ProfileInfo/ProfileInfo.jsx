import React from 'react';

import cls from './ProfileInfo.module.css'
import Preload from '../../Preload/Preload';
import userDef from './../../../assets/img/userDef.png'
import Status from './../Status/Status'
import StatusWithHooks from '../Status/StatusWithHooks';



const ProfileInfo = (props) => {
if(!props.userProfile){
    return <Preload/>
} else {
    return (
        <div className={cls.wrapper}>
            <img className={cls.userPhoto} src={props.userProfile.photos.small?props.userProfile.photos.small:userDef} alt="user" />
            <div className={cls.textWrapper}>
                <h1 className={cls.name}>{props.userProfile.fullName}</h1>
                <StatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}
}


export default ProfileInfo;