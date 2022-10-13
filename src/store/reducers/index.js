import { combineReducers } from 'redux';
// reducers 
import reducerGames from './yam';

export default combineReducers({
    games : reducerGames
});