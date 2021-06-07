// questo è il componente che contiene tutti gli stati della nostra applicazione
// se mettessi tutto in qusto unico file diventerebbe grosso e difficile.
// lo separiamo in sezioni individuali.

// combineReducers è un componente che permette di mettere insieme le 
// sezioni individuali che definiamo (userReducer, storeReducer ...)
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
})