import React, { useState } from 'react';

import cls from './ProfileInfo.module.css'
import Preload from '../../Preload/Preload';
import userDef from './../../../assets/img/userDef.png'
import StatusWithHooks from '../Status/StatusWithHooks';
import Contacts from '../Contacts/Contacts';
import ContactsForm from '../Contacts/ContactsForm';




const ProfileInfo = ({ userProfile, savePhoto, isOwner, status, updateStatus, saveProfile }) => {
    
    let [editMode, setEditMode] = useState(false)

    if (!userProfile) {
        return <Preload />
    } else {
        const onMainPhotoSelected = (e) => {
            if (e.target.files.length) {
                savePhoto(e.target.files[0])
            }
        }
        
        const onSubmit = (formData) =>{
            saveProfile(formData)
            setEditMode(false)
        }
        return (<>
            <div className={cls.wrapper}>
                <div className={cls.photoWrapper}>
                    <img className={cls.userPhoto}
                        src={userProfile.photos.small ? userProfile.photos.small : userDef}
                        alt="user" />
                    {isOwner
                        && <div className={cls.buttonChangePhoto}>
                            <span className={cls.buttonChangePhotoText} >C</span>
                            <input className={cls.buttonChangePhotoInput}
                                type={'file'}
                                onChange={onMainPhotoSelected} />
                        </div>}
                </div>
                <div className={cls.textWrapper}>
                    <h1 className={cls.name}>{userProfile.fullName}</h1>
                    <StatusWithHooks status={status} updateStatus={updateStatus} />
                </div>
            </div>
            {editMode
                ? <ContactsForm initialValues={userProfile} userProfile={userProfile} onSubmit={onSubmit} />
                : <Contacts userProfile={userProfile}
                    isOwner={isOwner}
                    goToEditMode={() => {setEditMode(true)}} />}


        </>)
    }
}


export default ProfileInfo;