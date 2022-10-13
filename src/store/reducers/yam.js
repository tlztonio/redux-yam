import { ADD_MESSAGE, SET_MESSAGE, SET_COUNT } from '../constants/actions';

// SOURCE DE VERITE == structure du store 
const initialState = {
    messages: [
        "Hello World !",
        "Bonjour tout le monde !"
    ],
    message: '',
    count: 0
}

const reducer = (state = initialState, action = {}) => {
    
}

export default reducer;