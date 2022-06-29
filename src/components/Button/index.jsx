import "./button.css";

const Button = ({ onClick, loading, children }) => (
  <div className="button" data-testid="button">
    <button
      className="primary"
      type="button"
      data-testid="reuseable-button"
      onClick={onClick}
    >
      {loading ? <span data-testid="loading">Loading...</span> : children}
    </button>
  </div>
);

export default Button;
