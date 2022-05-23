import { CONSTANTS } from "../action";

const initialState = [
{ title: "this Episode", 
id: `list-${1}`, 
cards: [ 
    { id: `card-${2}`, text: "Hi" }, 
    { id: `card-${3}`, text: "we used a mix between material" }, 
    { id: `card-${4}`, text: "what?" } ,
    { id: `card-${5}`, text: "hehe?" } 
] 
} 
];

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD: {
      const { text, listID, id } = action.payload;

      const newCard = {
        text,
        id: `card-${id}`,
        list: listID
      };

      return { ...state, [`card-${id}`]: newCard };
    }
    // case CONSTANTS.EDIT_CARD: {
    //   const { id, newText } = action.payload;
    //   const card = state[id];
    //   console.log("state[id]" + state[id]);
    //   card.text = newText;
    //   console.log("newText: " + newText);
    //   console.log("card.text: " + card.text);
    //   console.log("`card-${id}`:" + `card-${id}`);
    //   return { ...state, [`card-${id}`]: card };
    // }

    
    case CONSTANTS.DELETE_CARD: {
      const { id } = action.payload;
      const newState = state;
      delete newState[id];
      return newState;
    }
    default:
      return state;
  }
};

export default cardsReducer;