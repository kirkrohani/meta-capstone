
const LinkWithIcon = ({ url, render, onclick }) => {
  return (
    <a href={url} onClick={onclick}>
      {render}
    </a>
  );
}

export default LinkWithIcon;