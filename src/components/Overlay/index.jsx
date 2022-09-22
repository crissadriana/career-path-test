import "./index.css";

const Overlay = ({ children, hidden = false }) => {
  return (
    <div className="overlay" hidden={hidden}>
      <div className="overlay-bg"></div>
      <div className="overlay-content">{children}</div>
    </div>
  );
};

export default Overlay;
