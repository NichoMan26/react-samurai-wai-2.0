import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from './../../../redux/state'

import cls from './NewMessage.module.css'
const NewMessage = (props) => {
    let newMessageEl = React.createRef();
    let addMessage = () => {
       props.dispatch(addMessageActionCreator())
    }
    let onMessageChange = () =>{
        let text = newMessageEl.current.value
        props.dispatch(updateNewMessageActionCreator(text))
    }
    
    return(
        <div className={cls.wrapper}>
            <textarea onChange={onMessageChange} ref={newMessageEl} className={cls.textarea} name="" value={props.dialogsPage.newMessage} ></textarea>
            <button onClick={addMessage} className={cls.button}>Add Message</button>
        </div>
    )
}
export default NewMessage;