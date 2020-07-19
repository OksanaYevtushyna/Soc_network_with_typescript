const SENT_MESSAGE = 'SENT-MESSAGE';


let initialState = {
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
    ]
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SENT_MESSAGE:
            let message = action.createdMessage
            let newMessage = {
                id: 6, message: message, src: 'https://cs8.pikabu.ru/post_img/big/2016/01/31/7/1454239523124489716.png'
            }
            return {
                ...state,
                messagesData: [newMessage, ...state.messagesData]
            }
        default:
            return state;
    }

    /*if (action.type === SENT_MESSAGE) {
        let newMessage = {
            id: 6, message: state.initialMessage, src: 'https://cs8.pikabu.ru/post_img/big/2016/01/31/7/1454239523124489716.png'
        }
        state.messagesData.unshift(newMessage);
        state.initialMessage = '';
    } else if (action.type === CREATE_MESSAGE) {
        state.initialMessage = action.createMessage;
    }

    return state;*/
}


export const sentMessage = (createdMessage) => ({ type: SENT_MESSAGE, createdMessage });


export default dialogReducer;