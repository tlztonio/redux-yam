import { ADD_MESSAGE , SET_COUNT, SET_MESSAGE, SET_GAME } from '../constants/actions';

// on prépare de petites fonctions anonymes pour le dispatcher
export const addMessage = payload => {
    return {
        type: ADD_MESSAGE, payload: payload
    }
};

export const set_message = payload => {
    return {
        type: SET_MESSAGE, payload
    }
};

export const set_count = () => {
    return {
        type: SET_COUNT
    }
};

export const set_game = () => {
    return {
        type: SET_GAME
    }
};