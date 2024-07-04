import { useState } from "react";
import "./Calc.css";

function Calc() {
  const [currentValue, setCurrentValue] = useState("0");

  const [pendingOperation, setPendingOperation] = useState(null);
  const [pedingValue, setPedingValue] = useState(null);
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
          <button key={i}>{num}</button>
        ))}
        <button>=</button>
      </div>
    </div>
  );
}

export default Calc;


