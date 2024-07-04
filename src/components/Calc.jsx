import { useState } from "react";
import "./Calc.css";

function Calc() {
  const [currentValue, setCurrentValue] = useState("0");

  const [pendingOperation, setPendingOperation] = useState(null);
  const [pendingValue, setPedingValue] = useState(null);
  const [completeOperation, setCompleteOperation] = useState("");

  const keypadNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operations = ["+", "-", "*", "/"];


  function handleClick(val){
        setCurrentValue(prevValue =>{
            if(prevValue === "0"){
                return val;
            } 
            if(prevValue !== "0"){
                return prevValue + val
            }
        })

        setCompleteOperation(prevOperation => prevOperation + val)
  }

  const handleClear = ()=> {
    setCurrentValue("0")
    setPendingOperation(null)
    setPedingValue(null)
  }


  const handleOperation = (operation) => {
    setCompleteOperation(currentValue + ' ' + operation)
    setPendingOperation(operation)
    setPedingValue(currentValue)
    setCurrentValue('0')
  }

  const handleCalcule = ()=> {
    if(!pendingOperation || !pendingValue){

    }
  }

  return (
    <div className="calc">
      <div className="completeOperation">{completeOperation}</div>
      <div className="display">{currentValue}</div>

      <div className="buttons">
        <button>AC</button>
        {keypadNumbers.map((num, i) => (
          <button
            key={i}
            onClick={() => {
              handleClick(num);
            }}
          >
            {num}
          </button>
        ))}

        {operations.map((num, i) => (
          <button key={i} onClick={()=> handleOperation(num) }>{num}</button>
        ))}
        <button>=</button>
      </div>
    </div>
  );
}

export default Calc;


