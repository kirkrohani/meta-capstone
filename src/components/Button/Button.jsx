import './Button.styles.css';

import { Link } from "react-router-dom";

const ConditionalWrapper = ({ condition, wrapper, children }) => 
  condition ? wrapper(children) : children;

const Button = ({ name, value, type="button", style, label="button", to }) => {
  return (
    <ConditionalWrapper condition={to} wrapper={children => <Link to={to}>{children}</Link>}>
      <button name={name} type={type} className={style} aria-label={label} >{value}</button>
    </ConditionalWrapper>
  );
}

export default Button;