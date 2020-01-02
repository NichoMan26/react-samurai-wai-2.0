import React from 'react'
import cls from './FormsControls.module.css'
import {Field} from 'redux-form'
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
export const createField = (placeholder,name,validators,component,props={},text='') => {
    return (
        <div>
           <Field
                placeholder={placeholder}
                name={name}
                validators={validators}
                component={component}
                {...props}
           />{text}
        </div>
    )
}