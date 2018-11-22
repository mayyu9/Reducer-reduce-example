import { combineReducers } from 'redux';

import AddReducer from './addReducer';
import MulReducer from './mulReducer';

const rootReducers = combineReducers({AddReducer, MulReducer});

export default rootReducers;
