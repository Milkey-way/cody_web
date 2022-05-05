import { CONSTANTS } from "../action";

let listID = 2; //추후에 서버통신으로 DB안에서 마지막 listID를 가져와야한다
let cardID = 4; //추후에 서버통신으로 DB안에서 마지막 cardID를 가져와야한다

const initialState = [ 
    { title: 'last Episode', 
    id: 0, cards: [ { id: 0, text: 'we created a static list and a static card' }, 
    { id: 1, text: 'we used a mix between material' } 
] 
}, 
{ title: 'this Episode', 
id: 1, cards: 
[ 
    { id: 0, text: 'Hi' }, 
    { id: 1, text: 'we used a mix between material' }, 
    { id: 2, text: 'what?' } 
] 
} 
];
const listsReducer = (state = initialState, action) => 
{ 
    switch (action.type) { 
        case CONSTANTS.ADD_LIST:
            const newList = {
                title:action.payload,
                cards: [],
                id: listID
            };
        listID += 1
        return [...state, newList];

        case CONSTANTS.ADD_CARD:
        const newCard = {
            text: action.payload.text,
            id: cardID,
        }
        cardID += 1
        const newState = state.map(list => {
            if (list.id === action.payload.listID) {
                return {
                    ...list,
                    cards: [...list.cards, newCard]
                }
            } else {
                return list
            }
        })
        return newState
        
        default:
            return state; 
    } 
};

export default listsReducer;