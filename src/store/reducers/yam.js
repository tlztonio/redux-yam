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

const reducerGames = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_GAME:

            // nouvelle référence des messages un nouveau tableau 
            const games = [...state.games]

            // Game
            const game = action.game.game

            games.push(game);

            // log du store
            console.log('state', state);

            return {
                ...state,
                games
            }

        default:
            return state;
    }
}

export default reducerGames;