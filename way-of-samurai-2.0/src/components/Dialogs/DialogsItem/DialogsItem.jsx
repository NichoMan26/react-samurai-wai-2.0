import React from 'react';
import { NavLink } from 'react-router-dom'

import cls from './DialogsItem.module.css'
const DialogsItem = (props) => {
    return (
        <NavLink className={cls.link} activeClassName={cls.active} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    )
}
export default DialogsItem;