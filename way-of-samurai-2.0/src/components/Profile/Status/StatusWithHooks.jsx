import React, {useState, useEffect} from 'react'
import cls from './Status.module.css'

const StatusWithHooks = (props) => {

let [editMode, setEditMode] = useState(false)
let [status, setStatus] = useState(props.status)
useEffect(() => {
    setStatus(props.status)
}, [props.status])

const activeMode = () => {
    setEditMode(true)
}
const deactivateEditMode = () =>{
    setEditMode(false)
    props.updateStatus(status)
}
const onStatusChange = (e) =>{
    setStatus(e.currentTarget.value)
}
    return (
        <div className={cls.wrapper}>
            <p className={cls.statusGeneral}>Статус: </p>
            {!editMode
                ? <p
                    onDoubleClick={activeMode}
                    className={cls.status}>
                    {props.status ? props.status : '-----'}
                </p>
                : <div>
                    <input className={cls.input}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        onChange={onStatusChange} 
                        value={status}
                        type="text" />
                    {/* <button>Send status</button> */}
                </div>}
        </div>
    )
}
export default StatusWithHooks