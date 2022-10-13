import { ADD_GAME } from '../constants/actions';

// SOURCE DE VERITE == structure du store 
const initialState = {
    games: [
        {
            brelans: 0,
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

        case ADD_GAME:
            return {
                ...state,
                games: [{
                    brelans: action.payload.brelans,
                    iterations: action.payload.iterations,
                }]
            }
        default:
            return state;
    }
}

export default reducer;