import { useEffect, useRef } from "react";
import "./index.css";

const Option = ({ value, setScore, autoFocus }) => {
  const inputRef = useRef();
  useEffect(() => {
    if (autoFocus) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <label key={`option-control-${value}`} className="option-control">
      <input
        ref={inputRef}
        data-testid={`score-option-${value}`}
        type="radio"
        name="question-options-group"
        className="option"
        value={value}
        onChange={({ target }) => setScore(target.value)}
      />
    </label>
  );
};

export default Option;
