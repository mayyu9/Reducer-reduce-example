import { ADD_TWO } from '../constants/constants';
import intialState from './initialState';

const AddReducer = (state= intialState, action )=> {
  console.log('add reducer:');
  switch(action.type){
    case ADD_TWO:
    return{
      ...state,
      sum: state.sum +2,
      totalOperations: state.totalOperations + 1,
    };
    default:
    return state;
  }
};

export default AddReducer;
