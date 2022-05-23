import { combineReducers } from 'redux'; 
import listsReducer from './listsReducers';
import cardsReducer from './cardsReducers';

const reducers = combineReducers({
    listsReducer, cardsReducer
});

export default reducers;