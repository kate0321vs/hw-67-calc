import "./Calculator.css"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';
import { add, addition, difference, multiplication, division } from './CalculatorSlice.ts';

const Calculator = () => {
  const numbers = ['1','2','3','4','5','6','7','8','9','+','0', '-', '*', '/'];
  const dispatch = useDispatch();
  const calculatorValue = useSelector((state: RootState) => state.calculator.value);

  const resultOfOperation = () => {
    if (calculatorValue.includes('+')) {
      return dispatch(addition());
    } else if (calculatorValue.includes('-')) {
      return dispatch(difference());
    } else if (calculatorValue.includes('*')) {
      return dispatch(multiplication());
    } else if (calculatorValue.includes('/')) {
      return dispatch(division());
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