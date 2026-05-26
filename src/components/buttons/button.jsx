
import './button.css';

const Button = ({ text, onClick, variant = 'solid', type = 'button' }) => {
  return (
    <button 
      type={type} 
      className={`custom-btn btn-${variant}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;