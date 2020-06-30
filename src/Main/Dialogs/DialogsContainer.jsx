import { sentMessage, createMessage } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

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
        state: state.dialogReducer
    }
}

export default compose(
    connect(mapStateToProps, { sentMessage, createMessage }),
    withAuthRedirect
)(Dialogs)

/*let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, { sentMessage, createMessage })(AuthRedirectComponent);


export default DialogsContainer;*/