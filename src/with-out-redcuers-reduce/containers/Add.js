import React from 'react';
import { connect } from 'react-redux';

import { addTwo } from '../actions/actions';

class Add extends React.Component{
  constructor(props){
    super(props);
    this.AddBtnHnadler = this.AddBtnHnadler.bind(this);
  }
  AddBtnHnadler(){
    this.props.addBtnClick();
  }

  render(){
    return(
      <div>
      <button onClick={this.AddBtnHnadler}>Add+2 </button>
      <div>
      sum: {this.props.sumValue}
      </div>
      <div>
      totalOperations: {this.props.operationsValue}
      </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return ({
    sumValue: state.AddReducer.sum,
    operationsValue: state.AddReducer.totalOperations
  })
}

const mapDispatchToProps = dispatch => ({
  addBtnClick: () => {
    dispatch(addTwo());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Add);
