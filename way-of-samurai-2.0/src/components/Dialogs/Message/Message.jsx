import React from 'react';

import cls from './Message.module.css'

const Message = (props) => {
    return(
        <div className={cls.wrapper}>
            <p className={cls.name}>{props.autor}:</p>
            <p>{props.text}</p>
        </div>
    )
}
export default Message;