import React, { useState } from "react";

import "./Calculator.css";

function Calculator() {
  const [result, setResult] = useState("");

  const clicHandler = (event) => {
    setResult(result.concat(event.target.value));
  };

  const equal = () => {
    setResult(eval(result).toString());
  };

  const clearDisplay = () => {
    setResult("");
  };

  const handleRemoveNumber = () => {
    setResult((prevValue) => prevValue.slice(0, -1));
  };
  return (
    <>
      <div className="bod">

        <div className="clac">
          <input type="text" placeholder="!" id="answer" value={result} />
          <input
            type="button"
            value="9"
            className="button"
            onClick={clicHandler}
          />
          <input
            type="button"
            value="8"
            className="button"
            onClick={clicHandler}
          />
          <input
            type="button"
            value="7"
            className="button"
            onClick={clicHandler}
          />
          <input
            type="button"
            value="6"
            className="button"
            onClick={clicHandler}
          />
          <input
            type="button"
            value="5"
            className="button"
            onClick={clicHandler}
          />
          <input
            type="button"
            value="4"
            className="button"
            onClick={clicHandler}
          />
          <input
            type="button"
            value="3"
            className="button"
            onClick={clicHandler}
          />
          <input
            type="button"
            value="2"
            className="button"
            onClick={clicHandler}
          />
          <input
            type="button"
            value="1"
            className="button"
            onClick={clicHandler}
          />
          <input
            type="button"
            value="0"
            className="button"
            onClick={clicHandler}
          />
          <input
            type="button"
            value="."
            className="button"
            onClick={clicHandler}
          />
          <input
            type="button"
            value="+"
            className="button"
            onClick={clicHandler}
          />
          <input
            type="button"
            value="-"
            className="button"
            onClick={clicHandler}
          />
          <input
            type="button"
            value="*"
            className="button"
            onClick={clicHandler}
          />
          <input
            type="button"
            value="/"
            className="button"
            onClick={clicHandler}
          />
          <input
            type="button"
            value="%"
            className="button"
            onClick={clicHandler}
          />
          <input
            type="button"
            value="("
            className="button"
            onClick={clicHandler}
          />
          <input
            type="button"
            value=")"
            className="button"
            onClick={clicHandler}
          />
          <input type="button" value="=" className="butt" onClick={equal} />
          <input
            type="button"
            value="Clear"
            className="butto"
            onClick={clearDisplay}
          />
          <input
            type="button"
            value="⌫"
            className="butto"
            onClick={handleRemoveNumber}
          />
        </div>
      </div>
    </>
  );
  
  
}

export default Calculator;
