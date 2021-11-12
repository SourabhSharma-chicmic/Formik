import Button from "./Atoms/Button";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import ErrorComponent from "./Atoms/ErrorComponent";

const initialValues = {
  userName: "",
  email: "",
  address: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  userName: Yup.string().required("Enter Name"),
  email: Yup.string().required("Enter Email").email("email must be"),
  address: Yup.string().required("Pleae Enter address"),
});
const RegistrationForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="row align-content-end ">
        <div className="col-md-6 offset-1 bg-dark mt-3">
          <Form>
            <Field
              className="form-control mt-5"
              placeholder="UserName"
              name="userName"
            />
            <ErrorMessage name="userName">
              {(error) => <ErrorComponent error={error} />}
            </ErrorMessage>
            <Field
              className="form-control mb-5 mt-3 "
              placeholder="Email"
              name="email"
            />
            <ErrorMessage name="email">
              {(error) => <ErrorComponent error={error} />}
            </ErrorMessage>

            <Field name="address">
              {(props) => {
                const { field, form, meta } = props;
                return (
                  <>
                    <textarea
                      placeholder="enter address"
                      className="form-control mb-5 mt-3 "
                      name="address"
                      {...field}
                    />
                    {meta.touched && meta.error ? (
                      <p className="text-danger">{meta.error}</p>
                    ) : (
                      "null"
                    )}
                  </>
                );
              }}
            </Field>
            <br />
            <Button type="submit" className="btn btn-danger btn-lg mb-5">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default RegistrationForm;
{
  /* 
    this is also way to creat our own elelmetn by using as or second is next method below
           
    <Field
              as="textarea"
              className="form-control mb-5 mt-3 "
              placeholder="Email"
              name="textarea"
            /> 
*/
}
