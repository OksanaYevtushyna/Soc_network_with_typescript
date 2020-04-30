import rerenderEntireTree from "../render";

let state = {
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
            { id: 1, message: 'Hello, how is your day?' },
            { id: 2, message: 'Do you have any plans?' },
            { id: 3, message: 'What`s new?' },
            { id: 4, message: 'Life is great!' },
            { id: 5, message: 'I am happy!' }
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
}


export let addPost = (post) => {
    let newPost = {
        id: 4, message: post, likeCount: 0, srcImage: 'https://cs8.pikabu.ru/post_img/big/2016/01/31/7/1454239523124489716.png'
    }
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
    state.profilePage.newPostData = '';
}

export let enterNewPost = (updatePost) => {
    state.profilePage.newPostData = updatePost;
    rerenderEntireTree(state);
}

export let sentMessage = (message) => {
    let newMessage = {
        id: 6, message: message
    }
    state.dialogsPage.messagesData.push(newMessage);
    rerenderEntireTree(state);
}

export let createMessage = (newMessage) => {
    state.dialogsPage.initialMessage = newMessage;
    rerenderEntireTree(state);
}

export default state;
