import {connect} from 'react-redux'
import Dialogs from './Dialogs';
import {compose} from 'redux'
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
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)