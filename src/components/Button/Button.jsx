import './Button.styles.css';

const Button = ({ name, value, type="button", style }) => {
  return (
    <button name={name} type={type} className={style}>{value}</button>
  );
}

export default Button;