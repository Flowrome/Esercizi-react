// import { MINUS_ONE, PLUS_ONE } from "./actionTypes";

// Stato iniziale
const initialState = {
    value: 0
};

// Creo il reducer
function counterReducer(state = initialState, action){
    // Controllo il tipo di action e in base a quello decido cosa fare
    switch(action.type){
        case 'PLUS_ONE.SUCCESS': {
            console.log('reducer:',action);
            return {
                // ritorno il vecchio stato
                ...state,
                // e incremento di uno sulla copia
                value: state.value + 1
            }
        }
        case 'MINUS_ONE.SUCCESS': {
            console.log('reducer:',action);
            return{
                // ritorno il vecchio stato
                ...state,
                // e decremento di uno sulla copia
                value: state.value - 1
            }
        }
        case 'changeValue.SUCCESS': {
            console.log('reducer:',action);
            return {
                ...state,
                value: Number(action.value)
            }
        }
        default: return state;
    }
}

export default counterReducer;