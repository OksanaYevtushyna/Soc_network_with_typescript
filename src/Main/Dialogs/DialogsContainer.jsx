import { sentMessageActionCreator, createMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

/*const DialogsContainer = () => {
    let state = props.store.getState().dialogsReducer;

    let sentMessage = () => {
        props.store.dispatch(sentMessageActionCreator());
    }

    let createMessage = (message) => {
        props.store.dispatch(createMessageActionCreator(message));
    }

    return (

        <StoreContext.Consumer>
            {store => {
                let state = store.getState().dialogsReducer;
                let sentMessage = () => {
                    store.dispatch(sentMessageActionCreator());
                }

                let createMessage = (message) => {
                    store.dispatch(createMessageActionCreator(message));
                }
                return < Dialogs sentMessage={sentMessage} createMessage={createMessage} state={state} />
            }}
        </StoreContext.Consumer>
    )
}*/


let mapStateToProps = (state) => {
    return {
        state: state.dialogsReducer
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sentMessage: () => dispatch(sentMessageActionCreator()),
        createMessage: (message) => dispatch(createMessageActionCreator(message))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;