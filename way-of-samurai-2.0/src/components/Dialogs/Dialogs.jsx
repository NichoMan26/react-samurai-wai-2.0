import React from 'react';

import cls from './Dialogs.module.css'

import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
const Dialogs = () => {
    let dialogsData = [
        { id:1, name:'Andrey' },
        { id:2, name:'Igor' },
        { id:3, name:'Valera' },
        { id:4, name:'Vova' },]
        let dialogList = dialogsData.map((el) => {
            return  <li><DialogsItem name={el.name} id={el.id} /></li>
        })
        
    let messagesData = [
        { id:1, autor:'Oleg', text:'Hi' },
        { id:2, autor:'Denis', text:'Hello' },
        { id:3, autor:'Oleg', text:'How are you?' },
        { id:4, autor:'Oleg', text:'Fine' },]
        let messageList = messagesData.map((el) => {
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

            </div>
        </div>
    )
}
export default Dialogs;