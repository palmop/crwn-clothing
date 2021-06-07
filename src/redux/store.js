import  {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './route-reducer';

const middlewares = [logger];

//i puntini servono per dare l'oggetto con tutti i suoi membri
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;