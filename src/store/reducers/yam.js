import { ADD_MESSAGE, SET_MESSAGE, SET_COUNT, SET_GAME } from '../constants/actions';

// SOURCE DE VERITE == structure du store 
const initialState = {
    games: [],
    game: {
        date: '',
        time: '',
        brelans6: 0,
        iterations: []
    },
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

        case SET_GAME:
            return {
                ...state,
                game: action.game
            }

        default:
            console.log(state);
            return state;
    }
}

export default reducer;