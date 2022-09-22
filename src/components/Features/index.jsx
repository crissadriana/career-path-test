import Card from "../Card";
import "./index.css";
import clipboardQuestion from "../../assets/clipboard-question.svg";
import scissorCutting from "../../assets/scissor-cutting.svg";
import stopWatch from "../../assets/stopwatch.svg";

const Features = () => {
  const featureData = [
    {
      id: "feature-1",
      title: "24 questions",
      content:
        "We will ask 24 questions relating to things you value and care about most.",
      color: "orange",
      icon: clipboardQuestion,
    },
    {
      id: "feature-2",
      title: "2 minutes",
      content:
        "Questions are on a scale from 1-5, and it is easy and quick to finish the test.",
      color: "purple",
      icon: stopWatch,
    },
    {
      id: "feature-3",
      title: "Personalised advice",
      content:
        "We’ll offer you personalised advice, guide through available paths, and suggest further steps.",
      color: "light-orange",
      icon: scissorCutting,
    },
  ];
  return (
    <div className="features">
      <div className="container">
        <div className="row">
          {featureData.map((feature) => (
            <div className="column column-4" key={feature.id}>
              <Card
                variant="withIcon"
                image={feature.icon}
                imageAlt={feature.alt}
                color={feature.color}
              >
                <p className="card-highlight">{feature.title}</p>
                <p className="paragraph--small">{feature.content}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
