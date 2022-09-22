import "./index.css";

const Progress = ({ progress, currQuestionNumber, totalQuestions }) => {

  return (
    <div className="progress">
      <p className="progress-title">
        {"Your progress"}
        <span className="progress-page">{` ${currQuestionNumber}/${totalQuestions}`}</span>
      </p>
      <div className="progress-bar">
        <span
          style={{ width: `${progress}%` }}
          className="progress-value"
        ></span>
      </div>
    </div>
  );
};

export default Progress;
