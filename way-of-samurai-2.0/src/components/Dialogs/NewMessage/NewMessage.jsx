import React from 'react';

import cls from './NewMessage.module.css'
const NewMessage = () => {
    let newMessageEl = React.createRef();
    let addMessage = () => {
        let text = newMessageEl.current.value
       alert(text)
    }
    
    return(
        <div className={cls.wrapper}>
            <textarea ref={newMessageEl} className={cls.textarea} name="" ></textarea>
            <button onClick={addMessage} className={cls.button}>Add Message</button>
        </div>
    )
}
export default NewMessage;