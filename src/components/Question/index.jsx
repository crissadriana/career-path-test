import "./index.css";
import Option from "../Option";

const Question = ({
  question,
  currentQuestion,
  totalQuestions,
  answerRange,
  setScore,
  disabledInput,
}) => {
  const mid = Math.ceil(answerRange.length / 2);
  return (
    <fieldset key={question.id} className="question" disabled={disabledInput}>
      <legend className="question-legend">
        <p className="current-question">{`${
          currentQuestion + 1
        }/${totalQuestions}`}</p>
        <div>
          <p className="question-intro">{"In a job I would be motivated by"}</p>
          <p className="question-text">{question.text}</p>
        </div>
      </legend>
      <div className="question-options">
        {answerRange.map((value, index) => (
          <Option
            key={`option-${value}`}
            value={value}
            setScore={setScore}
            autoFocus={!disabledInput && mid === index}
          />
        ))}
      </div>

      <div className="question-answer-legend">
        <span>{"Disagree"}</span>
        <span>{"Neutral"}</span>
        <span>{"Agree"}</span>
      </div>
    </fieldset>
  );
};

export default Question;
