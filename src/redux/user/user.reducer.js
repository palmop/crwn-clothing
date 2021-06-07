const INITIAL_STATE = {
    currentUser: null
}

// l'action è un oggetto con il type e il payload
// {
//     type: stringa-blabla,
//     payload: oggetto-blabla 
// }

// state ha un valore di default che è INITIAL_STATE
// se l'input "state" è undefined allora prende il valore INITIAL_STATE
// okkio che se l'input "state" è null , viene preso come valore.
const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            // il reducer propaga l'action a tutti i reducer
            // se un reducer non contempla l'action.type ritorna
            // lo stato così com è
            return state;
    }
} // => { currentUser: {...} }

export default userReducer;