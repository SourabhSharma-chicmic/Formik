const Input = (props) => {
  return (
    <input
      className={props.className || "form-control"}
      required={props.required}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};


export default Input;