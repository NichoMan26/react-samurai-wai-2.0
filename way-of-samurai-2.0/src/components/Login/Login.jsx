import React from 'react'
import cls from './Login.module.css'
import {Field, reduxForm} from 'redux-form'


const LoginForm = (props) => {
 return (
    <form onSubmit={props.handleSubmit} className={cls.form}>
        <div><Field type='text' placeholder='Login' name={'login'} component={'input'}/></div>
        <div><Field type='text' placeholder='Password' name={'password'} component={'input'}/></div>
        <div><Field type='checkbox' name={'rememberMe'} component={'input'}/> Remember me</div>
        <div><button>Login</button></div>
    </form>
 )
}

const LoginReduxForm = reduxForm({
    form:'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log('formData: ', formData);
    }
    return <div className={cls.wrapper}>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        </div>
}
export default Login

