import { getApiData } from '../api/api';


const ADD_POST = 'ADD-POST';
const ENTER_NEW_POST = 'ENTER-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        { id: 1, message: 'Hello world!', likeCount: 12, srcImage: 'https://www.biletik.aero/upload/resize_cache/medialibrary/807/compressed/807f262b60da392f1e09aa6d33f20a9b.jpg' },
        { id: 2, message: 'Life is great!', likeCount: 43, srcImage: 'https://cdna.artstation.com/p/assets/images/images/020/382/532/smaller_square/marco-franco-post-avatar-macf-original.jpg' },
        { id: 3, message: 'Props is done.', likeCount: 28, srcImage: 'https://i.pinimg.com/236x/7c/bb/27/7cbb270385783c329a26945143f8b275--post-avatar.jpg' }
    ],
    newPostData: 'Hey',
    userProfile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4, message: state.newPostData, likeCount: 0, srcImage: 'https://econet.ru/uploads/pictures/456173/content_199820.jpg'
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostData: ''
            }
        case ENTER_NEW_POST:
            return {
                ...state,
                newPostData: action.updatePost
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.profile
            }
        default:
            return state;
    }

    /*if (action.type === ADD_POST) {
        let newPost = {
            id: 4, message: state.newPostData, likeCount: 0, srcImage: 'https://cs8.pikabu.ru/post_img/big/2016/01/31/7/1454239523124489716.png'
        }
        state.postsData.push(newPost);
        state.newPostData = '';
    } else if (action.type === ENTER_NEW_POST) {
        state.newPostData = action.updatePost;
    }

    return state;*/
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const enterNewPostActionCreator = (post) => ({ type: ENTER_NEW_POST, updatePost: post });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile });

export const getUserIdThunk = (userId) => {
    return (dispatch) => {
        getApiData.getUserId(userId).then(respons => {
            dispatch(setUserProfile(respons.data));
        })
    }
}


export default profileReducer;