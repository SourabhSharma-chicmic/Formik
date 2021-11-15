

const ErrorComponent = (props)=>{

    return <p className="text-danger">
        {/* {props.error} */}
        {props.children}
    </p>

}

export default ErrorComponent;