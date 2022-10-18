const Button = (props) => {
  const className = props.className !== undefined ? props.className : "btn btn-dark";

  return (
    <button className={className} onClick={props.onClick}>
      {props.name}
    </button>
  );
};

export default Button;
