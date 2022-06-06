import { GET_USERS, GET_POSTS } from "./actionTypes";

// Stato iniziale
const initialState = {
    data: [],
    counter: 0
};

// Creo il reducer
function reducer(state = initialState, action){
    // Controllo il tipo di action e in base a quello decido cosa fare
    switch(action.type){
        case GET_USERS.SUCCESS : {
            return {
                ...state,
                data: action.data,
                counter: state.counter +1
            }
        }
        case GET_POSTS.SUCCESS : {
            return {
                ...state,
                data: action.data,
                counter: state.counter +1
            }
        }
        
        default: return state;
    }
}

export default reducer;