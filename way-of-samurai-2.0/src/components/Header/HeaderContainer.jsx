import React from 'react';
import Header from './Header'
import {logout} from './../../redux/auth-reducer'
import {connect} from 'react-redux'


class HeaderContainer extends React.Component{
    
   
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
export default connect(mapDispatchToProps, {logout})(HeaderContainer);