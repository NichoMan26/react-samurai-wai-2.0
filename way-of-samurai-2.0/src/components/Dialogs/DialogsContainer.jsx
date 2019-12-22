import {connect} from 'react-redux'
import Dialogs from './Dialogs';
import {compose} from 'redux'
import {withAuthRedirect}  from './../../hoc/withAuthRedirct'
import {addMessageActionCreator} from './../../redux/dialogs-reducer'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        }
    }
let mapDispatchToProps = (dispatch) => {
        return {
            onAddMessage: (messageBody) => {
                dispatch(addMessageActionCreator(messageBody))
            },
        }
    }
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)