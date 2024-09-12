//import dependencies
import React, { useReducer } from 'react';
import './App.css';

//import components
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

//import helpers
import reducer, { initialState } from './reducers'
import {applyNumber, changeOperation, clearDisplay, memoryAdd, memoryClear, memoryRecall } from './actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clickHandler = val => {
    // const value = e.target.value
    // console.log(value)
    dispatch(applyNumber(val));
  }
  
  const operationHandler = operator => {
    dispatch(changeOperation(operator));
  }

  const clearHandler = () => {
    dispatch(clearDisplay());
  }

  const memoryHandler = e => {
    // console.log(e.target.value)
    // console.log('memory', state.memory)
    // console.log('total', state.total)
    // eslint-disable-next-line default-case
    switch(e.target.value){
      case('M+'):
        return(dispatch(memoryAdd()));
      case('MR'):
        return(dispatch(memoryRecall()));
      case('MC'):
        return(dispatch(memoryClear()));
    }
    // if (e.target.value === 'M+'){
    //   console.log('check')
    //   dispatch(memoryAdd());
    // }

  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png" alt="here is your alt"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={e => memoryHandler(e)}/>
              <CalcButton value={"MR"} onClick={e => memoryHandler(e)}/>
              <CalcButton value={"MC"} onClick={e => memoryHandler(e)}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={(e) => clickHandler(1)}/>
              <CalcButton value={2} onClick={() => clickHandler(2)}/>
              <CalcButton value={3} onClick={() => clickHandler(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => clickHandler(4)}/>
              <CalcButton value={5} onClick={() => clickHandler(5)}/>
              <CalcButton value={6} onClick={() => clickHandler(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => clickHandler(7)}/>
              <CalcButton value={8} onClick={() => clickHandler(8)}/>
              <CalcButton value={9} onClick={() => clickHandler(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => operationHandler("+")}/>
              <CalcButton value={"*"} onClick={() => operationHandler("*")}/>
              <CalcButton value={"-"} onClick={() => operationHandler("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => clearHandler()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
