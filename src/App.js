import React from 'react';
import './App.css';

import StateTutorial from './UseState/StateTutorial'
import StateTutoiral1  from './UseState/StateTutorial1'
import ReducerTutorial from './UseReducer/ReducerTutorial'
import ReduceTutorial1 from './UseReducer/ReduceTutorial1'
import EffectTutorial from './UseEffect/EffectTutorial'
import RefTutorial from './UseRef/RefTutorial'
import LayoutEffect from './UseLayoutEffect/LayoutEffect'
import ContextTutorial from './UseContext/ContextTutorial'

function App() {
  return (
    <div className="App">
      {/* <StateTutorial/> */}
      {/* <StateTutoiral1/> */}
      {/* <ReducerTutorial/> */}
      { /* <ReduceTutorial1/> */}
      {/* <EffectTutorial/> */}
      {/* <RefTutorial/> */}
      {/* <LayoutEffect/> */}
      <ContextTutorial/>
    </div>
  )
}

export default App;
