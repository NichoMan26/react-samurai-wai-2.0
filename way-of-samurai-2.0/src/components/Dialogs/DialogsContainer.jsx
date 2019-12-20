import {connect} from 'react-redux'
import Dialogs from './Dialogs';
import {withAuthRedirect}  from './../../hoc/withAuthRedirct'
import {addMessageActionCreator, updateNewMessageActionCreator} from './../../redux/dialogs-reducer'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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
    let AuthRedirectContainer = withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectContainer)
export default DialogsContainer;