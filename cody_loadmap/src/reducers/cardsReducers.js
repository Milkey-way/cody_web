import { CONSTANTS } from "../action";

const initialState = {
  "card-0": {
    text: "Last Episode",
    id: `card-0`,
    list: "list-0"
  },
  "card-1": {
    text: "Last Episode",
    id: `card-1`,
    list: "list-1"
  },
  "card-2": {
    text: "Last Episode",
    id: `card-2`,
    list: "list-2"
  },
  "card-3": {
    text: "Last Episode",
    id: `card-3`,
    list: "list-3"
  },
  "card-4": {
    text: "Last Episode",
    id: `card-4`,
    list: "list-4"
  },
  "card-5": {
    text: "Last Episode",
    id: `card-5`,
    list: "list-5"
  }
};

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
    case CONSTANTS.EDIT_CARD: {
      const { id, newText } = action.payload;
      const card = state[id];
      console.log("state[id]" + state[id]);
      card.text = newText;
      console.log("newText: " + newText);
      console.log("card.text: " + card.text);
      console.log("`card-${id}`:" + `card-${id}`);
      return { ...state, [`card-${id}`]: card };
    }

    
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