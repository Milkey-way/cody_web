import { CONSTANTS } from "../action";

let listID = 2;

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

        default:
            return state; 
    } 
};

export default listsReducer;