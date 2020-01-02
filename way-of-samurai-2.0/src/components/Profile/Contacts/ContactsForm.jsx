import React from 'react'
import cls from './ContactsForm.module.css'
import { createField, Input , Textarea} from '../../Common/FormsControls/FormsControls'
import { reduxForm } from 'redux-form'

const ContactsForm = ({userProfile, handleSubmit, error}) => {
    //let countContact = 0
    let CountJSX = Object.keys(userProfile.contacts).map((cont) => {
            return ( <li key={cont} className={cls.li}>
                <strong className={cls.nameContact}>{cont}: </strong> 
                {createField(cont, 'contacts.' + cont, [], Input)}
            </li>)
    })
    return(
    <form onSubmit={handleSubmit}>
        <div className={cls.profileDataWrapper}>
            
            <div className={cls.profileDataString}><b>Full name:</b>
                {createField('Full name', 'fullName', [], Input)}
            </div>
            <div className={cls.profileDataString}><b>Loking a job:</b>
                {createField('', 'lookingForAJob', [], Input, {type:'checkbox'})}
            </div>
            <div className={cls.profileDataString}><b>About me:</b>
                {createField('About me', 'aboutMe', [], Input)}
            </div>
            <div className={cls.profileDataString}><b>About my profeshional skills:</b>
                {createField('About my profeshional skills', 'lookingForAJobDescription', [], Textarea)}  
            </div>
        </div>
        <div className={cls.wrapper}>
            <ul>
                {CountJSX}
            </ul>
            <button className={cls.button}>save</button>
        </div>
        
    </form>
)}
const ContactsFormReduxForm = reduxForm({form:'editProfile'})(ContactsForm)
export default ContactsFormReduxForm