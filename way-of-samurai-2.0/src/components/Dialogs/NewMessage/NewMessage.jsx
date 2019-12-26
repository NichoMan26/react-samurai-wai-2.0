import React from 'react';
import {Field, reduxForm} from 'redux-form'

import cls from './NewMessage.module.css'
import {required, maxLengthCreator} from '../../../utils/validators/validators'
import {Textarea} from '../../Common/FormsControls/FormsControls'

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
let maxLength100 = maxLengthCreator(100)
const AddMessageForm = (props) => {
    return(
    <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name="newMessageBody" 
                className={cls.textarea}
                validate={[required, maxLength100]} />
        <button className={cls.button}>Add Message</button>
    </form>)
}
const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)
export default NewMessage;