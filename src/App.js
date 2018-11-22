import React, { Component } from 'react';

import './App.css';

import Main from './with-out-redcuers-reduce/components/Main';
import Main2 from './with-redcuers-reduce/components/Main';

class App extends Component {
  render() {
    return (
      <div>

      <hr />
      <div className="App">
      <p>react-redux with reducers-reduce</p>
        <Main2 />
      </div>
      </div>
    );
  }
}

export default App;


// <div className="App">
// <p>react-redux with combine reducers</p>
//   <Main />
// </div>
