import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { fetchQuestions } from "../../data/actions/questions";
import { submitAnswers } from "../../data/actions/submissions";

import State from "../../data/State";

import Paper from "../Paper";
import Progress from "../Progress";
import Spinner from "../Spinner";
import Button from "../Button";
import Question from "../Question";
import Overlay from "../Overlay";

import instructionsIcon from "../../assets/keyboard.svg";
import "./index.css";

const Wizard = () => {
  const {
    questions: [{ data: questions }, setQuestions],
    submissions: [{ data: submissions }, setSubmissions],
  } = useContext(State);

  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [finishedTest, setFinishedTest] = useState(false);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(1);

  const [searchParams] = useSearchParams();
  const user = searchParams.get("user");
  const answerRange = [...Array(8).keys()];

  useEffect(() => {
    fetchQuestions(user, setQuestions);
  }, [user, setQuestions]);

  useEffect(() => {
    if (finishedTest) {
      handleSubmission();
    }
  }, [finishedTest]);

  useEffect(() => {
    if (submissions.ok) {
      navigate(`/see-results?user=${user}`);
    }
  });

  if (!questions.length) return <Spinner />;

  const submitAnswer = () => {
    const answerData = {
      [currentQuestion]: {
        questionId: question.id,
        answer: Number(score),
      },
    };

    setAnswers((curr) => ({ ...curr, ...answerData }));
    setScore(null); // Reset score for the next question

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setProgress(progress + 1);
    } else {
      setFinishedTest(true);
    }
  };

  const handleSubmission = async () => {
    const payload = [...Object.entries(answers)]
      .sort((a, b) => a[0] - b[0])
      .map((item) => item[1]);
    submitAnswers({ answers: payload }, user, setSubmissions);
  };

  const handleStartClick = () => {
    setStarted(true);
  };

  const totalQuestions = questions.length;
  const progressValue = Math.ceil((progress * 100) / totalQuestions);
  const question = questions[currentQuestion];
  const nextPageDisabled = score === null;

  return (
    <Paper>
      <Progress
        totalQuestions={totalQuestions}
        currQuestionNumber={currentQuestion + 1}
        progress={progressValue}
      />
      <hr />
      <div className="wizard">
        <form>
          <Question
            question={question}
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
            answerRange={answerRange}
            setScore={setScore}
            disabledInput={!started}
          />

          <div className="text-center question-submit">
            {currentQuestion + 1 === totalQuestions ? (
              <Button onClick={submitAnswer} disabled={nextPageDisabled}>
                {"Finish"}
              </Button>
            ) : !started ? (
              <Button onClick={handleStartClick} autoFocus>
                {"Start the test"}
              </Button>
            ) : (
              <Button onClick={submitAnswer} disabled={nextPageDisabled}>
                {"Next"}
              </Button>
            )}
          </div>
        </form>

        <div className="wizard-instructions text-center">
          <img
            src={instructionsIcon}
            alt="keyboard"
            className="wizard-instructions-icon"
          />
          <p className="paragraph--xsmall">
            {"Use left and right arrows to select, confirm with Enter"}
          </p>
        </div>
      </div>
      <Overlay hidden={started} />
    </Paper>
  );
};

export default Wizard;
