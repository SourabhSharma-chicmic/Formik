import  Button  from "./Atoms/Button";
import { Formik, useFormik } from "formik";
import { Yup as yup } from "yup";
import Input from "./Atoms/Input";

const RegistrationForm = () => {

    const formik = useFormik({
        initialValues :{
            userName :'krishna',
            channel :''
        } ,

        onSubmit :(values) =>{
            console.log(values)
        }
    })

     
  return (
    <>
      <div className="row align-content-end ">
        <div className="col-md-6 offset-1 bg-dark mt-3">
          <form onSubmit={formik.handleSubmit}>
            <Input
              className="form-control mt-5"
              placeholder="UserName"
              name="userName"
                onChange={formik.handleChange}
                value={formik.values.userName}
            />
            <Input
              className="form-control mb-5 mt-3 "
              placeholder="Email"
              name="channel"
              onChange={formik.handleChange}
              value={formik.values.channel}
            />

            <Button type='submit' className="btn btn-danger btn-lg mb-5">Submit</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
