import { FULL_NAME, GET_NAMES } from "./actionTypes";

// Stato iniziale
const initialState = {
    fullName: '',
    data: []
};

// Creo il reducer
function reducer(state = initialState, action){
    // Controllo il tipo di action e in base a quello decido cosa fare
    switch(action.type){
        case FULL_NAME.SUCCESS: {
            console.log('reducer_action:',action);
            console.log('reducer_state:',state);
            return {
                ...state,
                fullName: action.fullName
            }
        }
        case GET_NAMES.SUCCESS: {
            console.log('reducer_action:',action);
            console.log('reducer state GETNAMES:',state);
            return {
                ...state,
                data: action.data
            }
        }
        
        default: return state;
    }
}

export default reducer;