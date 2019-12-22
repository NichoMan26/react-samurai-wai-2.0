import React from 'react';
import {Field, reduxForm} from 'redux-form'

import cls from './NewMessage.module.css'

const NewMessage = (props) => {
    let addNewMessage = (values) =>{
        props.onAddMessage(values.newMessageBody)
    }
    return(
        <div className={cls.wrapper}>
           <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}
const AddMessageForm = (props) => {
    return(
    <form onSubmit={props.handleSubmit}>
        <Field component={'textarea'} name="newMessageBody" className={cls.textarea} />
        <button className={cls.button}>Add Message</button>
    </form>)
}
const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)
export default NewMessage;