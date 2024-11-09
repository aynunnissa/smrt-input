import { ChangeEvent, useState } from "react";
import "./styles.css";
import { parseToNumber } from "./helpers/parser";
import reverseString from "./helpers/reverseString";
import { removeLeadingZeroAndNonDigit } from "./helpers/sanitizeInput";

export default function App() {
  const [inputText, setInputText] = useState<string>('');
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState(false); // make sure to handle any possible error

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    //please put your logic here
    const sanitizeInput = removeLeadingZeroAndNonDigit(event.target.value);
    setInputText(sanitizeInput);
  }

  function handleSubmit() {
    setError(false);
    const { error, value } = parseToNumber(inputText);
    const { error: errorReverse, value: valueReverse } = parseToNumber(reverseString(inputText));
    
    if (error || errorReverse) {
      setError(true);
    } else {
      setResult(Math.abs(value - valueReverse));
    }
    
  }

  return (
    <div className="App">
      <div>
        Number: <input value={inputText} onChange={handleInput} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Result: {result}</div>
      {error && <p className="error-text">Failed to process: input must be number</p>}
    </div>
  );
}
