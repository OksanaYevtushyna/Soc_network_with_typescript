import profileReducer, { addPostActionCreator, deletePost } from './profileReducer';

let state = {
    postsData: [
        { id: 1, message: 'Hello world!', likeCount: 12, srcImage: 'https://www.biletik.aero/upload/resize_cache/medialibrary/807/compressed/807f262b60da392f1e09aa6d33f20a9b.jpg' },
        { id: 2, message: 'Life is great!', likeCount: 43, srcImage: 'https://cdna.artstation.com/p/assets/images/images/020/382/532/smaller_square/marco-franco-post-avatar-macf-original.jpg' },
        { id: 3, message: 'Props is done.', likeCount: 28, srcImage: 'https://i.pinimg.com/236x/7c/bb/27/7cbb270385783c329a26945143f8b275--post-avatar.jpg' },
        { id: 15, message: 'Props is done.', likeCount: 28, srcImage: 'https://i.pinimg.com/236x/7c/bb/27/7cbb270385783c329a26945143f8b275--post-avatar.jpg' }
    ]
}


it('new post should be added', () => {
    let action = addPostActionCreator('Pararam');
    let newPost = profileReducer(state, action);

    expect(newPost.postsData.length).toBe(5);
})

it('new post message should be correct', () => {
    let action = addPostActionCreator('Pararam');
    let newPost = profileReducer(state, action);

    expect(newPost.postsData[4].message).toBe('Pararam');
})

it('post message was deleted, length was decremented', () => {
    let action = deletePost(1);
    let newPost = profileReducer(state, action);


    expect(newPost.postsData.length).toBe(3);
})

it('postData length should not be change if id is incorrect', () => {
    let action = deletePost(154);
    let newPost = profileReducer(state, action);


    expect(newPost.postsData.length).toBe(4);
})