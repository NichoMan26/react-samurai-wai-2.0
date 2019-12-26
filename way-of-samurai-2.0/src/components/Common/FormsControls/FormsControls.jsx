import React from 'react'
import cls from './FormsControls.module.css'
export const Textarea = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    return (
        <div className={cls.wrapper}>
            <textarea className={cls.textarea} {...input} {...props}/>
        {hasError ? <div className={cls.errorWrapper}>{meta.error}</div> : null}
        </div>
    )
}
export const Input = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    return (
        <div>
            <input {...input} {...props}/>
        {hasError ? <span className={cls.errorWrapper}>{meta.error}</span> : null}
        </div>
    )
}