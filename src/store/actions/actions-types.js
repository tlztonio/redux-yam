import { ADD_GAME } from '../constants/actions';

export const add_game = (payload) => {
    return {
        type: ADD_GAME,
        game: payload

    }
};