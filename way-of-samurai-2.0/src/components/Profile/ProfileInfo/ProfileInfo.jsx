import React from 'react';

import cls from './ProfileInfo.module.css'
import Preload from '../../Preload/Preload';
import userDef from './../../../assets/img/userDef.png'
import StatusWithHooks from '../Status/StatusWithHooks';
import {change} from 'redux-form'



const ProfileInfo = (props) => {
if(!props.userProfile){
    return <Preload/>
} else {
    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <div className={cls.wrapper}>
            <div className={cls.photoWrapper}>
                <img className={cls.userPhoto} src={props.userProfile.photos.small?props.userProfile.photos.small:userDef} alt="user" />
                { props.isOwner 
                && <div className={cls.buttonChangePhoto}>
                        <span className={cls.buttonChangePhotoText} >C</span>
                        <input className={cls.buttonChangePhotoInput} 
                                type={'file'} 
                                onChange={onMainPhotoSelected} />
                        </div>}
            </div>
            <div className={cls.textWrapper}>
                <h1 className={cls.name}>{props.userProfile.fullName}</h1>
                <StatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}
}


export default ProfileInfo;