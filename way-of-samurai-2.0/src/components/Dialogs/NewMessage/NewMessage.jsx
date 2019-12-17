import React from 'react';

import cls from './NewMessage.module.css'
const NewMessage = (props) => {
    let onAddMessage = () => {
       props.onAddMessage()
    }
    let onMessageChange = (event) =>{
        let text = event.target.value
        props.onMessageChange(text)
    }
    
    return(
        <div className={cls.wrapper}>
            <textarea onChange={onMessageChange} className={cls.textarea} name="" value={props.dialogsPage.newMessage} ></textarea>
            <button onClick={onAddMessage} className={cls.button}>Add Message</button>
        </div>
    )
}
export default NewMessage;