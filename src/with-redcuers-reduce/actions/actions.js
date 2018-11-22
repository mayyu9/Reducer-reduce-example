import { MUL_THREE, ADD_TWO} from '../constants/constants';


export function addTwo(){
  return {
    type: ADD_TWO
  };
};


export function mulThree(){
  return{
    type: MUL_THREE
  };
};
