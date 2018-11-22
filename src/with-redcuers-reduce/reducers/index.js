// import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';

import AddReducer from './addReducer';
import MulReducer from './mulReducer';
// import intialState from './initialState';

const rootReducers = reduceReducers(AddReducer, MulReducer);
//const rootReducers = combineReducers({inital})

console.log('root:'+JSON.stringify(rootReducers));

export default rootReducers;
