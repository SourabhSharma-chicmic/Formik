import  Button  from "./Atoms/Button";
import { Formik, useFormik } from "formik";
import { Yup as yup } from "yup";
import Input from "./Atoms/Input";

const RegistrationForm = () => {
  return (
    <>
      <div className="row align-content-end ">
        <div className="col-md-6 offset-1 bg-dark mt-3">
          <form>
            <Input
              className="form-control mt-5"
              placeholder="UserName"
              name="userName"
            />
            <Input
              className="form-control mb-5 mt-3 "
              placeholder="Email"
              name="userName"
            />

            <Button type='submit' className="btn btn-danger btn-lg mb-5">Submit</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
