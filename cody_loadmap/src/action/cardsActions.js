import { CONSTANTS } from "../action";
export const addCard = (listID, text) => { 
    return { 
        type: CONSTANTS.ADD_CARD, 
        payload: {text, listID} 
    }; 
};
export const editCard = (id, listID, newText) => {
  console.log("카드액션editCard호출");
    return {
      type: CONSTANTS.EDIT_CARD,
      payload: { id, listID, newText }
    };
  };
  
  export const deleteCard = (id, listID) => {
    return {
      type: CONSTANTS.DELETE_CARD,
      payload: { id, listID }
    };
  };

