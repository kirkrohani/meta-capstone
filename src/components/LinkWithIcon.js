import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkWithIcon = ({ url, render, onclick }) => {
  return (
    <a href={url} onClick={onclick}>
      {render}
    </a>
  );
}

export default LinkWithIcon;