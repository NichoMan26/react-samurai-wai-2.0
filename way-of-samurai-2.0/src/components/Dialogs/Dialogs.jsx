import React from 'react';

import cls from './Dialogs.module.css'

import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';
const Dialogs = (props) => {
    
        let dialogList = props.dialogsPage.posts.map((el) => {
            return  <li><DialogsItem name={el.name} id={el.id} /></li>
        })
        let messageList = props.dialogsPage.messages.map((el) => {
            return  <li><Message autor={el.autor} text={el.text} /></li>
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
                <NewMessage dispatch={props.dispatch} dialogsPage={props.dialogsPage}/>
            </div>
        </div>
    )
}
export default Dialogs;