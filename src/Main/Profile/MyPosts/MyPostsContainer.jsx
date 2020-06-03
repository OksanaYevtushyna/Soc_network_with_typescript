import { enterNewPostActionCreator, addPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


/*const MyPostsContainer = (props) => {
    let state = props.store.getState().profileReducer;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let enterNewPost = (post) => {
        props.store.dispatch(enterNewPostActionCreator(post))
    }

    return (
        <MyPosts enterNewPost={enterNewPost} addPost={addPost} state={state} />
    )
}*/


let mapStateToProps = (state) => {
    return {
        state: state.profileReducer
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        enterNewPost: (post) => dispatch(enterNewPostActionCreator(post))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;