import { combineReducers } from 'redux'; 
import listsReducer from './listsReducers';
import cardsReducer from './cardsReducers';
export default combineReducers({
    lists: listsReducer,
    cards: cardsReducer
});
