import "./Calculator.css"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';
import { add, addition, difference } from './CalculatorSlice.ts';

const Calculator = () => {
  const numbers = ['1','2','3','4','5','6','7','8','9','+','0', '-', '*', '/'];
  const dispatch = useDispatch();
  const calculatorValue = useSelector((state: RootState) => state.calculator.value);

  console.log(calculatorValue)

  const resultOfOperation = () => {
    if (calculatorValue.includes('+')) {
      return dispatch(addition());
    } else if (calculatorValue.includes('-')) {
      return dispatch(difference());
    }
  }

  return (
    <div className="container">
      <div className='display'>{ calculatorValue }</div>
      <div className="keyboard">
        {numbers.map(num => (
          <button key={num} className="key" onClick={() => dispatch(add(num))}>{num}</button>
        ))}
          <button className="key" onClick={resultOfOperation}>=</button>
      </div>
    </div>
  );
};

export default Calculator;