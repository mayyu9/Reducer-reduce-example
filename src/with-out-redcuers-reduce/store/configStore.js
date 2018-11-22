import { createStore } from 'redux';

import rootReducers from '../reducers/index';

const configureStore = createStore(
  rootReducers,
);

export default configureStore;
