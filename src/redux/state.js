import profileReducer from './profileReducer';
import dialogReducer from './dialogsReducer';
import { navbarReducer } from './navbarReducer';


let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hello world!', likeCount: 12, srcImage: 'https://www.biletik.aero/upload/resize_cache/medialibrary/807/compressed/807f262b60da392f1e09aa6d33f20a9b.jpg' },
                { id: 2, message: 'Life is great!', likeCount: 43, srcImage: 'https://cdna.artstation.com/p/assets/images/images/020/382/532/smaller_square/marco-franco-post-avatar-macf-original.jpg' },
                { id: 3, message: 'Props is done.', likeCount: 28, srcImage: 'https://i.pinimg.com/236x/7c/bb/27/7cbb270385783c329a26945143f8b275--post-avatar.jpg' }
            ],
            newPostData: 'Hey'
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Oksana' },
                { id: 3, name: 'Ira' },
                { id: 4, name: 'Lena' },
                { id: 5, name: 'Vitya' }
            ],
            messagesData: [
                { id: 1, message: 'Hello, how is your day?', src: 'https://www.dhresource.com/0x0/f2/albu/g2/M01/96/84/rBVaG1oqYkuAFdvJAADFP_3Xees277.jpg' },
                { id: 2, message: 'Do you have any plans?', src: 'https://2kartinki.ru/files/products/4214_1.550x800.jpg?fc8a9216169c62b87deb528c15cc9a55' },
                { id: 3, message: 'What`s new?', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRe-MlkycDj-VEMD1uP6J0CzyZ8ZB25DrKXIal3iPXFfgERSmWY&usqp=CAU' },
                { id: 4, message: 'Life is great!', src: 'https://avatarko.ru/img/kartinka/15/zhivotnye_sobaka_14667.jpg' },
                { id: 5, message: 'I am happy!', src: 'https://illustrators.ru/uploads/illustration/image/1295608/main_%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0_2.jpg' }
            ],
            initialMessage: ''
        },
        navbar: {
            friendsData: [
                { id: 1, src: 'https://skidka02.ru/wp-content/uploads/instagram-avatarka-razmer_31.jpg', name: 'Oleh' },
                { id: 2, src: 'https://www.meme-arsenal.com/memes/8b0943bab2557a4a088c46e899835946.jpg', name: 'Vitalina' },
                { id: 3, src: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg', name: 'Ivan' }
            ]
        },
        usersPage: {
            usersData: [
                { id: 1, name: 'Dmitry K.', status: 'I am super teacher', city: 'Frankfurt', img: 'https://lh3.googleusercontent.com/proxy/tElJqkSTAEwTXcaWBi5U3glKZOmLQyQvuPaRxGqu7e8xjtaYViprmdTDxufb-9tWtrkTzG50NMJHl9ETDbYEnH0V-Fo7J19kBKJf5e5q8KPYkzSYQDivZyTqyIZYW5wznyZWUMcC' },
                { id: 2, name: 'Anna S.', status: 'Everyone is absolutelly awesome!', city: 'Paris', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQb0XSWbIbtAUux1Vr13RX2ot-eMMVplo4rk5ccK1Nw-F-_62CF&usqp=CAU' },
                { id: 3, name: 'Peter W.', status: 'Love my job..!', city: 'San-Francisco', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSb9SvhC369UROJ90S2pvDWSaXUtgFNK_oaRI2KXk7qs7GoYWLs&usqp=CAU' },
                { id: 4, name: 'Paulo L.', status: 'Let`s do something...', city: 'Rome', img: 'https://www.caricature-art.com/wp-content/uploads/2019/01/%D0%A8%D0%B5%D1%80%D0%BB%D0%BE%D0%BA-785x785.jpg' },
            ]
        }
    },

    _rerenderEntireTree() { },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._rerenderEntireTree();
    }
}


export default store;









/*
Old version

const ADD_POST = 'ADD-POST';
const ENTER_NEW_POST = 'ENTER-NEW-POST';
const SENT_MESSAGE = 'SENT-MESSAGE';
const CREATE_MESSAGE = 'CREATE-MESSAGE';

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hello world!', likeCount: 12, srcImage: 'https://www.biletik.aero/upload/resize_cache/medialibrary/807/compressed/807f262b60da392f1e09aa6d33f20a9b.jpg' },
                { id: 2, message: 'Life is great!', likeCount: 43, srcImage: 'https://cdna.artstation.com/p/assets/images/images/020/382/532/smaller_square/marco-franco-post-avatar-macf-original.jpg' },
                { id: 3, message: 'Props is done.', likeCount: 28, srcImage: 'https://i.pinimg.com/236x/7c/bb/27/7cbb270385783c329a26945143f8b275--post-avatar.jpg' }
            ],
            newPostData: 'Hey'
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Oksana' },
                { id: 3, name: 'Ira' },
                { id: 4, name: 'Lena' },
                { id: 5, name: 'Vitya' }
            ],
            messagesData: [
                { id: 1, message: 'Hello, how is your day?', src: 'https://www.dhresource.com/0x0/f2/albu/g2/M01/96/84/rBVaG1oqYkuAFdvJAADFP_3Xees277.jpg' },
                { id: 2, message: 'Do you have any plans?', src: 'https://2kartinki.ru/files/products/4214_1.550x800.jpg?fc8a9216169c62b87deb528c15cc9a55' },
                { id: 3, message: 'What`s new?', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRe-MlkycDj-VEMD1uP6J0CzyZ8ZB25DrKXIal3iPXFfgERSmWY&usqp=CAU' },
                { id: 4, message: 'Life is great!', src: 'https://avatarko.ru/img/kartinka/15/zhivotnye_sobaka_14667.jpg' },
                { id: 5, message: 'I am happy!', src: 'https://illustrators.ru/uploads/illustration/image/1295608/main_%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0_2.jpg' }
            ],
            initialMessage: ''
        },
        navbar: {
            friendsData: [
                { id: 1, src: 'https://skidka02.ru/wp-content/uploads/instagram-avatarka-razmer_31.jpg', name: 'Oleh' },
                { id: 2, src: 'https://www.meme-arsenal.com/memes/8b0943bab2557a4a088c46e899835946.jpg', name: 'Vitalina' },
                { id: 3, src: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg', name: 'Ivan' }
            ]
        }
    },

    _rerenderEntireTree() { },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    _addPost() {
        let newPost = {
            id: 4, message: this._state.profilePage.newPostData, likeCount: 0, srcImage: 'https://cs8.pikabu.ru/post_img/big/2016/01/31/7/1454239523124489716.png'
        }
        this._state.profilePage.postsData.push(newPost);
        this._rerenderEntireTree();
        this._state.profilePage.newPostData = '';
    },
    _enterNewPost(updatePost) {
        this._state.profilePage.newPostData = updatePost;
        this._rerenderEntireTree();
    },
    _sentMessage() {
        let newMessage = {
            id: 6, message: this._state.dialogsPage.initialMessage, src: 'https://cs8.pikabu.ru/post_img/big/2016/01/31/7/1454239523124489716.png'
        }
        this._state.dialogsPage.messagesData.unshift(newMessage);
        this._rerenderEntireTree();
        this._state.dialogsPage.initialMessage = '';
    },
    _createMessage(newMessage) {
        this._state.dialogsPage.initialMessage = newMessage;
        this._rerenderEntireTree();
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost();
        } else if (action.type === ENTER_NEW_POST) {
            this._enterNewPost(action.updatePost);
        } else if (action.type === SENT_MESSAGE) {
            this._sentMessage();
        } else if (action.type === CREATE_MESSAGE) {
            this._createMessage(action.createMessage);
        }
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST });
export const enterNewPostActionCreator = (post) => ({ type: ENTER_NEW_POST, updatePost: post });

export const sentMessageActionCreator = () => ({ type: SENT_MESSAGE });
export const createMessageActionCreator = (createdMessage) => ({ type: CREATE_MESSAGE, createMessage: createdMessage });


export default store;*/
