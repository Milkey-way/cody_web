import { CONSTANTS } from "../action";

let listID = 1; 
let cardID = 6; 

const initialState = [ 
    { title: "last Episode", 
    id: `list-${0}`, 
    cards: [ 
    { id: `card-${0}`,  cards: ["card-0"], text: "we created a static list and a static card" }, 
    { id: `card-${1}`,  cards: ["card-0"], text: "we used a mix between material" } 
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
                droppableIndexStart
            } = action.payload;
            const newState = [...state];

            //같은 리스트라면
            if(droppableIdStart === droppableIdEnd){
                const list = state.find(list => droppableIdStart === list.id)
                const card = list.cards.splice(droppableIndexStart, 1)
                list.cards.splice(droppableIndexEnd, 0, ...card)
            }

      //다른 목록이라면      
      if (droppableIdStart !== droppableIdEnd) {
        //드래그가 발생한 목록을 찾는다
        const listStart = state[droppableIdStart];
        //이 목록에서 카드를 꺼낸다
        const card = listStart.cards.splice(droppableIndexStart, 1);
        //드래그가 종료된 목록을 찾는다
        const listEnd = state[droppableIdEnd];

        //카드를 새 목록에 넣는다
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
        return {
          ...state,
          [droppableIdStart]: listStart,
          [droppableIdEnd]: listEnd
        };
    }

            return newState;

            case CONSTANTS.EDIT_CARD: {
                const { id, listID, newText } = action.payload;
                return state.map(list => {
                  if (list.id === listID) {
                    const newCards = list.cards.map(card => {
                      if (card.id === id) {
                        card.text = newText;
                        return card;
                      }
                      return card;
                    });
                    return { ...list, cards: newCards };
                  }
                  return list;
                });
              }
            
              case CONSTANTS.DELETE_CARD: {
                const { id, listID } = action.payload;
                return state.map(list => {
                  if (list.id === listID) {
                    const newCards = list.cards.filter(card => card.id !== id);
                    return { ...list, cards: newCards };
                  } else {
                    return list;
                  }
                });
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