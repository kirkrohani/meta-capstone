import './Button.styles.css';

const Button = ({ name, value, type="button", style, label="button" }) => {
  return (
    <button name={name} type={type} className={style} aria-label={label} >{value}</button>
  );
}

export default Button;