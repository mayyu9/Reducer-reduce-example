import React from 'react';
import { connect } from 'react-redux';

import { mulThree } from '../actions/actions';

class Mul extends React.Component{
  constructor(props){
    super(props);
    this.MulBtnHnadler = this.MulBtnHnadler.bind(this);
  }
  MulBtnHnadler(){
    this.props.mulBtnClicked();
  }

  render(){
    return(
      <div>
      <button onClick={this.MulBtnHnadler}>Mul*3</button>
      <div>
      Mul: {this.props.mulValue}
      </div>
      <div>
      totalOperations: {this.props.operationsValue}
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    mulValue: state.MulReducer.product,
    operationsValue: state.MulReducer.totalOperations
  })
};

const mapDispatchToProps = dispatch => ({
  mulBtnClicked: () => {
    dispatch(mulThree());
  },
});


export default connect(mapStateToProps,mapDispatchToProps)(Mul);
