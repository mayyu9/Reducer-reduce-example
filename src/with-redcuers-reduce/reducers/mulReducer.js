import { MUL_THREE } from '../constants/constants';
import intialState from './initialState';


const MulReducer = (state= intialState, action )=> {
  console.log('add reducer:');
  switch(action.type){
    case MUL_THREE:
    return{
      ...state,
      product: state.product * 3,
      totalOperations: state.totalOperations + 1,
    };
    default:
    return state;
  }
};

export default MulReducer;
