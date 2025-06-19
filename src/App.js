import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setExpression("");
    setResult("");
  };

  const handleBackspace = (e) => {
    e.preventDefault();
    setExpression((prev) => prev.slice(0, -1));
  };

  const handleEquals = (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-eval
      const evalResult = eval(expression);
      setExpression(String(evalResult));
    } catch {
      setExpression("Error");
    }
  };

  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "+", "="]
  ];

  return (
    <div className="calculator-container">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <input
          ref={inputRef}
          type="text"
          value={expression}
          placeholder="0"
          readOnly
        />

        {buttons.map((row, i) => (
          <div className="button-row" key={i}>
            {row.map((btn) =>
              btn === "=" ? (
                <button
                  key={btn}
                  className="equals"
                  onClick={handleEquals}
                  type="button"
                >
                  =
                </button>
              ) : (
                <button
                  key={btn}
                  className={"/+-*".includes(btn) ? "operation" : ""}
                  onClick={() => handleButtonClick(btn)}
                  type="button"
                >
                  {btn}
                </button>
              )
            )}
          </div>
        ))}
        <div className="button-row">
          <button className="clear" onClick={handleClear} type="button">
            C
          </button>
          <button className="clear" onClick={handleBackspace} type="button">
            ⌫
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
