import React from 'react';
import Header from './Header'
import {getAuthUserData} from './../../redux/auth-reducer'
import {connect} from 'react-redux'
import {authAPI} from './../../api/api'


class HeaderContainer extends React.Component{
    
    componentDidMount(){
        this.props.getAuthUserData()
    }
    render(){
        return(
            <Header {...this.props}/>
        )
    }
}
const mapDispatchToProps = (state) => {
return{
    isAuth:state.auth.isAuth,
    login:state.auth.login,
    id:state.auth.id
}
}
export default connect(mapDispatchToProps, {getAuthUserData})(HeaderContainer);