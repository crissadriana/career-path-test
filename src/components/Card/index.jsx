import "./index.css";

const Card = ({
  variant = "default",
  children,
  image = null,
  imageAlt = null,
  color = "black",
}) => {
  return (
    <div className={`card card--${variant} card--${color}`}>
      {image && (
        <div className="card-image">
          <img src={image} alt={imageAlt} />
        </div>
      )}
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
