import React from 'react'
import cls from './Status.module.css'

class Status extends React.Component{
    state = {
        editMode: false,
        status: this.props.status
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }
    activateEditMode = () =>{
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () =>{
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status:e.currentTarget.value
        })
    }
    render(){
        return(
        <div className={cls.wrapper}>
            <p className={cls.statusGeneral}>Status: </p>
        {!this.state.editMode
        ? <p onDoubleClick={this.activateEditMode} 
        className={cls.status}>
            {this.state.status?this.state.status:'-----'}
            </p>
        :<div>
            <input className={cls.input} 
                    onChange={this.onStatusChange} 
                    autoFocus={true} 
                    onBlur={this.deactivateEditMode} 
                    value={this.state.status} 
                    type="text"/>
            {/* <button>Send status</button> */}
        </div>}
        </div>
        )
    }
}
export default Status