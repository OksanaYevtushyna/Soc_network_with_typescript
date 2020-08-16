type NavbarType = {
    //friendsData: { id: number, src: string, name: string }[]
    friendsData: Array<{ id: number, src: string, name: string }>
    navbarListData: { id: number, linkName: string, linkPath: string }[]
}

let initialState: NavbarType = {
    friendsData: [
        { id: 1, src: 'https://skidka02.ru/wp-content/uploads/instagram-avatarka-razmer_31.jpg', name: 'Oleh' },
        { id: 2, src: 'https://www.meme-arsenal.com/memes/8b0943bab2557a4a088c46e899835946.jpg', name: 'Vitalina' },
        { id: 3, src: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg', name: 'Ivan' }
    ],
    navbarListData: [
        { id: 1, linkName: 'Home', linkPath: '/profile' },
        { id: 2, linkName: 'Messages', linkPath: '/dialogs' },
        { id: 3, linkName: 'Users', linkPath: '/users' },
        { id: 4, linkName: 'News', linkPath: '/news' },
        { id: 5, linkName: 'Music', linkPath: '/music' },
        { id: 6, linkName: 'Notification', linkPath: '/notification' },
        { id: 7, linkName: 'Settings', linkPath: '/settings' }
    ]
};

export const navbarReducer = (state = initialState, action: any) => {


    return state;
}