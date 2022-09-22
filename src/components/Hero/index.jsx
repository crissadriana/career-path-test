import "./index.css";
import heroImage from "../../assets/airport-taxi.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-subtitle type--uppercase">
              {"Career path finder"}
            </p>
            <h2 className="hero-title">
              {"Discover the journey to your career"}
            </h2>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Airport taxi" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
