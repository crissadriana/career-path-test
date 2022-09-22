import "./index.css";

const Button = ({
  children,
  color = "primary",
  onClick = () => {},
  autoFocus = false,
  disabled = false,
}) => {
  const options = {};
  if (autoFocus) {
    options.autoFocus = true;
  }
  return (
    <button
      {...options}
      onClick={onClick}
      className={`button button--${color}`}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
