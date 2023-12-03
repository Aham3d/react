import { useReducer } from 'react';
import './App.css'
import DigitButton from './digitButton';
import OperationButton from './OperationButton';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit', 
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear', 
  DELETE_DIGIT: 'delete-digit', 
  EVALUATE: 'evaluate'
}

function reducer(state, {type, payload}) {
  switch(type) {
    case ACTIONS.ADD_DIGIT:
    if(payload.digit === '0' && state.currentOperand === '0') {
      return state
    }  
    if(payload.digit === '.' && state.currentOperand.includes('.')) {
      return state
    }
    return  {
      ...state, 
      currentOperand: `${state.currentOperand || " "} ${payload.digit}`
    }

    case ACTIONS.CLEAR:
    return {

    }

    case ACTIONS.CHOOSE_OPERATION:
      
  }
}

function App() {

  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})

  // dispatch({type:ACTIONS.ADD_DIGIT, payload: {digit: 1 }})

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous">{previousOperand} {operation}</div>
        <div className="current">{currentOperand}</div>
      </div>
      <button className="span-two" 
        onClick={
          () => {
            dispatch({type: ACTIONS.CLEAR})
          }
        }
      >
        AC
      </button>
      <button>DEL</button>
      <OperationButton operation="/" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <button className="span-two">=</button>
    </div>
  )

}

export default App;