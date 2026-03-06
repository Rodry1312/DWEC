import "../App.css";

interface ButtonProps {
  text: string | null;
  onClick: () => void;
}

function Button({ text, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
