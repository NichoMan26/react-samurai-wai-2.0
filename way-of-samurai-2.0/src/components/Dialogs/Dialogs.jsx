import React from 'react';

import cls from './Dialogs.module.css'

import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';
const Dialogs = (props) => {
        let dialogList = props.dialogsPage.posts.map((el, idx) => {
            return  <li key={idx}><DialogsItem key={idx} name={el.name} id={el.id} /></li>
        })
        let messageList = props.dialogsPage.messages.map((el, idx) => {
            return  <li key={idx}><Message key={idx} autor={el.autor} text={el.text} /></li>
        })
    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsLeft}>
                <ul className={cls.ul}>
                {dialogList}
                </ul>
            </div>
            <div className={cls.messages}>
                <ul>
                   {messageList}
                </ul>
                <NewMessage  dialogsPage={props.dialogsPage}
                            onAddMessage={props.onAddMessage}/>
            </div>
        </div>
    )
}
export default Dialogs;