import { useState } from "react";
import "./Calc.css";

function Calc() {
  const [currentValue, setCurrentValue] = useState("0");
  const [pendingOperation, setPendingOperation] = useState(null);
  const [pendingValue, setPendingValue] = useState(null);
  const [completeOperation, setCompleteOperation] = useState("");

  const keypadNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operations = ["+", "-", "*", "/"];

  function handleClick(val) {
    setCurrentValue(prevValue => {
      if (prevValue === "0") {
        return val;
      }
      return prevValue + val;
    });

    setCompleteOperation(prevOperation => prevOperation + val);
  }

  const handleOperation = (operation) => {
    setCompleteOperation(currentValue + ' ' + operation);
    setPendingOperation(operation);
    setPendingValue(currentValue);
    setCurrentValue('0');
  };

  const handleClear = () => {
    setCurrentValue("0");
    setPendingOperation(null);
    setPendingValue(null);
    setCompleteOperation("");
  };

  const handleCalculate = () => {
    if (!pendingOperation || !pendingValue) {
      return;
    }

    const num1 = parseFloat(pendingValue);
    const num2 = parseFloat(currentValue);
    let result;

    switch (pendingOperation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if(num2 !==0){

          result = num1 / num2;
        }else {
          setCurrentValue("ERROR")
          setCompleteOperation("ERROR")
          setPendingValue(null)
          setPendingOperation(null)
          return
        }
        break;
      default:
        break;
    }

    setCompleteOperation(` ${result}`);
    setCurrentValue(result.toString());
    setPendingOperation(null);
    setPendingValue(null);
  };

  return (
    <div className="calc">
      <div className="completeOperation">{completeOperation}</div>
      <div className="display">{currentValue}</div>

      <div className="buttons">
        <button onClick={handleClear}>AC</button>
        {keypadNumbers.map((num, i) => (
          <button
            key={i}
            onClick={() => handleClick(num)}
          >
            {num}
          </button>
        ))}

        {operations.map((num, i) => (
          <button key={i} onClick={() => handleOperation(num)}>{num}</button>
        ))}
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}

export default Calc;
