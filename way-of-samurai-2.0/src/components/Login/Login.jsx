import React from 'react'
import cls from './Login.module.css'
import {Field, reduxForm} from 'redux-form'
import { Input } from '../Common/FormsControls/FormsControls'
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
        props.login(formData.email, formData.password, formData.rememberMe,)
    }
    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div className={cls.wrapper}>
        <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
}
const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps,{login})(Login)

