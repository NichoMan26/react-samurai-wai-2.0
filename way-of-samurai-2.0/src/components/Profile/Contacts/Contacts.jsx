import React from 'react'
import cls from './Contacts.module.css'

const Contacts = ({userProfile, isOwner, goToEditMode}) => {
    let countContact = 0
    let CountJSX = Object.keys(userProfile.contacts).map((cont) => {
        if(userProfile.contacts[cont]){
            countContact++
            return ( <li key={cont} className={cls.li}>
                <strong className={cls.nameContact}>{cont}: </strong> 
                <a href={userProfile.contacts[cont]}>{userProfile.contacts[cont]}</a>
            </li>)
        }
    })
    return(
    <>  
        <div className={cls.profileDataWrapper}>
        {isOwner && <button className={cls.button} onClick={goToEditMode}>edit</button>}
            <div className={cls.profileDataString}><b>Name:</b> <span>{userProfile.fullName ? userProfile.fullName : '-----'}</span></div>
            <div className={cls.profileDataString}><b>Loking a job:</b> <span>{userProfile.lookingForAJob ? 'yes' : 'no'}</span></div>
            <div className={cls.profileDataString}><b>About me:</b> <span>{userProfile.aboutMe ? userProfile.aboutMe : '-----'}</span></div>
            <div className={cls.profileDataString}><b>About my profeshional skills:</b> <span>{userProfile.lookingForAJobDescription ? userProfile.lookingForAJobDescription : '-----'}</span></div>
        </div>
        <div className={cls.wrapper}>
            <h2 className={cls.header}>Contacts: {countContact}</h2>
            <ul>
                {CountJSX}
            </ul>
            
        </div>
    </>
)}
export default Contacts