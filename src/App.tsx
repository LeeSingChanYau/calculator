import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [operatorClicked, setOperatorClicked] = useState(false);
  const [currentValue, setValue] = useState(0);
  const [operator, setOperator] = useState('');

  const handleInput = (input: string) => {
    if (operatorClicked) {
      console.log('inside handleInput if');
      setInputValue(input);
      setOutputValue(input);
      setOperatorClicked(false);
    } else {
      console.log('inside handleInput else');
      setInputValue(inputValue + input);
      setOutputValue(outputValue + input);
    }
  };

  const handleSum = () => {
    setOperatorClicked(true);
    setOperator('+');
    if (currentValue > 0) {
      console.log('inside handleSum if');
      let sum = currentValue + Number(inputValue);
      setOutputValue(String(sum));
      setInputValue('0');
      setValue(sum);
    } else {
      console.log('inside handleSum else');
      setValue(Number(inputValue));
    }
  };

  const handleSubtract = () => {
    setOperatorClicked(true);
    setOperator('-');
    if (currentValue > 0) {
      console.log('inside handleSum if');
      let sum = currentValue - Number(inputValue);
      setOutputValue(String(sum));
      setInputValue('0');
      setValue(sum);
    } else {
      console.log('inside handleSum else');
      setValue(Number(inputValue));
    }
  };

  const handleMultiplication = () => {
    setOperatorClicked(true);
    setOperator('*');
    if (currentValue > 0) {
      console.log('inside handleSum if');
      let sum = currentValue * Number(inputValue);
      setOutputValue(String(sum));
      setInputValue('0');
      setValue(sum);
    } else {
      console.log('inside handleSum else');
      setValue(Number(inputValue));
    }
  };

  const handleDivision = () => {
    setOperatorClicked(true);
    setOperator('/');
    if (currentValue > 0) {
      console.log('inside handleSum if');
      let sum = currentValue / Number(inputValue);
      setOutputValue(String(sum));
      setInputValue('0');
      setValue(sum);
    } else {
      console.log('inside handleSum else');
      setValue(Number(inputValue));
    }
  };

  const handleEqual = () => {
    if (operator === '') {
      return;
    }
    switch (operator) {
      case '+':
        handleSum();
        break;
      case '-':
        handleSubtract();
        break;
      case '*':
        handleMultiplication();
        break;
      case '/':
        handleDivision();
        break;
      default:
        break;
    }
  };

  const handleAllClear = () => {
    setInputValue('0');
    setOutputValue('');
    setValue(0);
  };

  return (
    <div className="app">
      <div className="calculator">
        <div className="result">{outputValue ? outputValue : '0'}</div>
        <div className="numbers">
          <div className="utility" onClick={handleAllClear}>
            AC
          </div>
          <div className="utility">+/-</div>
          <div className="utility">%</div>
          <div className="operator" onClick={handleDivision}>
            /
          </div>
        </div>
        <div className="numbers">
          <div className="number" onClick={() => handleInput('7')}>
            7
          </div>
          <div className="number" onClick={() => handleInput('8')}>
            8
          </div>
          <div className="number" onClick={() => handleInput('9')}>
            9
          </div>
          <div className="operator" onClick={handleMultiplication}>
            X
          </div>
        </div>
        <div className="numbers">
          <div className="number" onClick={() => handleInput('4')}>
            4
          </div>
          <div className="number" onClick={() => handleInput('5')}>
            5
          </div>
          <div className="number" onClick={() => handleInput('6')}>
            6
          </div>
          <div className="operator" onClick={handleSubtract}>
            -
          </div>
        </div>
        <div className="numbers">
          <div className="number" onClick={() => handleInput('1')}>
            1
          </div>
          <div className="number" onClick={() => handleInput('2')}>
            2
          </div>
          <div className="number" onClick={() => handleInput('3')}>
            3
          </div>
          <div className="operator" onClick={handleSum}>
            +
          </div>
        </div>
        <div className="numbers">
          <div className="zero">0</div>
          <div className="number">.</div>
          <div className="operator" onClick={handleEqual}>
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
