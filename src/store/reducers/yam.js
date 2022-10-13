import { ADD_MESSAGE, SET_MESSAGE, SET_COUNT, SET_GAME } from '../constants/actions';

// SOURCE DE VERITE == structure du store 
const initialState = {
    games: [
        {
            date: '',
            time: '',
            brelans6: 0,
            iterations: [
                {
                    total: 0,
                    de1: 0,
                    de2: 0,
                    de3: 0,
                }
            ]
        },
    ],
    
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

        case SET_GAME:
            return {
                ...state,
                games: [ {
                    date: action.payload.date,
                    time: action.payload.time,
                    brelans6: action.payload.brelans6,
                    iterations: action.payload.iterations,
                }]
            }

        default:
            return state;
    }
}

export default reducer;