import {connect} from 'react-redux'
import Dialogs from './Dialogs';
import {addMessageActionCreator, updateNewMessageActionCreator} from './../../redux/dialogs-reducer'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
        }
    }
let mapDispatchToProps = (dispatch) => {
        return {
            onAddMessage: () => {
                dispatch(addMessageActionCreator())
            },
            onMessageChange: (text) => {
                dispatch(updateNewMessageActionCreator(text))
            }
        }
    }
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;