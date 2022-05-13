import { CONSTANTS } from "../action";

let listID = 2; //추후에 서버통신으로 DB안에서 마지막 listID를 가져와야한다
let cardID = 6; //추후에 서버통신으로 DB안에서 마지막 cardID를 가져와야한다

const initialState = [ 
    { title: "last Episode", 
    id: `list-${0}`, 
    cards: [ 
    { id: `card-${0}`, text: "we created a static list and a static card" }, 
    { id: `card-${1}`, text: "we used a mix between material" } 
] 
}, 
{ title: "this Episode", 
id: `list-${1}`, 
cards: [ 
    { id: `card-${2}`, text: "Hi" }, 
    { id: `card-${3}`, text: "we used a mix between material" }, 
    { id: `card-${4}`, text: "what?" } ,
    { id: `card-${5}`, text: "wtf?" } 
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
                id: `list-${listID}`
            };
        listID += 1
        return [...state, newList];

        case CONSTANTS.ADD_CARD:{
        const newCard = {
            text: action.payload.text,
            id: `card-${cardID}`,
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
        return newState;
    }

        case CONSTANTS.DRAG_HAPPENED:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexEnd,
                droppableIndexStart,
                draggableId
            } = action.payload;
            const newState = [...state];

            //in the same list
            if(droppableIdStart === droppableIdEnd){
                const list = state.find(list => droppableIdStart === list.id)
                const card = list.cards.splice(droppableIndexStart, 1)
                list.cards.splice(droppableIndexEnd, 0, ...card)
            }

            // other list
      if (droppableIdStart !== droppableIdEnd) {
        // find the list where the drag happened
        const listStart = state[droppableIdStart];
        // pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1);
        // find the list where the drag ended
        const listEnd = state[droppableIdEnd];

        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
        return {
          ...state,
          [droppableIdStart]: listStart,
          [droppableIdEnd]: listEnd
        };
    }

            return newState;
            
            case CONSTANTS.DELETE_CARD: {
                const { listID, id } = action.payload;
          
                const list = state[listID];
                const newCards = list.cards.filter(cardID => cardID !== id);
          
                return { ...state, [listID]: { ...list, cards: newCards } };
              }
          
              case CONSTANTS.EDIT_LIST_TITLE: {
                const { listID, newTitle } = action.payload;
          
                const list = state[listID];
                list.title = newTitle;
                return { ...state, [listID]: list };
              }
          
              case CONSTANTS.DELETE_LIST: {
                const { listID } = action.payload;
                const newState = state;
                delete newState[listID];
                return newState;
              }
        
        default:
            return state; 

            
    } 
};

export default listsReducer;