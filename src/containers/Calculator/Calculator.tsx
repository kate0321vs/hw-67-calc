import "./Calculator.css"

const Calculator = () => {
  const numbers = ['1','2','3','4','5','6','7','8','9'];


  return (
    <div className="container">
      <div className='display'></div>
      <div className="keyboard">
        {numbers.map(num => (
          <button className="key">{num}</button>
        ))}
        <button className="key">+</button>
        <button className="key">0</button>
        <button className="key">-</button>
        <button className="key">*</button>
        <button className="key">/</button>
        <button className="key">=</button>
      </div>
    </div>
  );
};

export default Calculator;