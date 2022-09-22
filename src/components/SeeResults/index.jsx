import Card from "../Card";
import Button from "../Button";
import ResultsImage from "../../assets/graduation.svg";

const SeeResults = () => {
  return (
    <Card variant="withImage" image={ResultsImage} imageAlt="Group hands up">
      <div className="card-text">
        <p>{"Completed on submission latest date"}</p>
        <p className="card-highlight">
          {"Well done on completing your test. You can view the results now."}
        </p>
      </div>
      <div className="card-action">
        <Button>{"See results"}</Button>
      </div>
    </Card>
  );
};

export default SeeResults;
