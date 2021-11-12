const Label = (props) => {
  return (
    <label className={props.className || "form-label"}>{props.children}</label>
  );
};

export default Label;
