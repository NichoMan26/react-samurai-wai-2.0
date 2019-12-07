import React from 'react';

import cls from './Post.module.css'
import userDef from './../../../../assets/img/userDef.png'
const Post = () => {
    return(
        <div className={cls.wrapper}>
            <div className={cls.avatar}>
                <img className={cls.avatar} src={userDef} alt="user"/>
            </div>
            <div className={cls.textWrapper}>
                <p className={cls.name}>Denis:</p>
                <p className={cls.text}>I'm cool man</p>
               
            </div>
        </div>
    )
}
export default Post;