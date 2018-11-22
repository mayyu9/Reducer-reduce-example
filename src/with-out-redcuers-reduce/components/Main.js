import React from 'react';

import Add from '../containers/Add';
import Mul from '../containers/Mul';

const Main = (props) => {
    return(
      <div style={{display:'inline-flex'}}>
      <div>
      <Add />
      </div>
      <div >
      <Mul />
      </div>

      </div>
    );
};

export default Main;
