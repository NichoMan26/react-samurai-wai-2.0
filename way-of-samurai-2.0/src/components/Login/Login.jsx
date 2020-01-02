import React from 'react'
import cls from './Login.module.css'
import {Field, reduxForm} from 'redux-form'
import { Input, createField } from '../Common/FormsControls/FormsControls'
import {required} from '../../utils/validators/validators'
import {connect} from 'react-redux'
import {login} from './../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import clsForm from './../Common/FormsControls/FormsControls.module.css'
const LoginForm = (props) => {
 return (
    <form onSubmit={props.handleSubmit} className={cls.form}>
        <div><Field type='text' placeholder='Login' name={'email'} 
        component={Input}
        validate={[required]}/></div>
        <div><Field type='text' placeholder='Password' name={'password'} 
        component={Input}
        validate={[required]}/></div>
        <div><Field type='checkbox' name={'rememberMe'} 
        component={Input}
        validate={[]}/> Remember me</div>
        {props.captchaUrl && <img src={props.captchaUrl} alt="captcha"/>}
        {props.captchaUrl && <div>{createField('Symbol from image', 'captcha', [required], Input, {})}</div>}
        <div><button>Login</button></div>
        {props.error && <div className={clsForm.formCommonError}>{props.error}</div>}
    </form>
 )
}

const LoginReduxForm = reduxForm({
    form:'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha,)
    }
    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div className={cls.wrapper}>
        <h1>LOGIN</h1>
            <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
        </div>
}
const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps,{login})(Login)

