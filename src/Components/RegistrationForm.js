import Button from "./Atoms/Button";
import {
  Formik,
  Field,
  ErrorMessage,
  Form,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import ErrorComponent from "./Atoms/ErrorComponent";
import { useState } from "react";

const initialValues = {
  userName: "",
  email: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phone: ["", ""],
  phNumbers: [""],
};

const savedValues = {
  userName: "sourabh",
  email: "s@gmail.com",
  address: "this is address",
  social: {
    facebook: "fb.com",
    twitter: "tw.com",
  },
  phone: ["123466", "321654"],
  phNumbers: [""],
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  userName: Yup.string().required("Enter Name"),
  email: Yup.string().required("Enter Email").email("email must be"),
  address: Yup.string().required("Pleae Enter address"),
});

// const validateEmail = (values) => {  // if we dont want use yup this is method we can get erros
//   let error;
//   if (!values) {
//     error = 'Requrierd!!'
//   }
//   return error;
// };
const RegistrationForm = () => {

  const [formValues,setFormValues] = useState(null)
  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      // validateOnChange={false} // can control validations onhcnge
      // validateOnBlur={false} // can control validon on blur
    >
      <div className="row align-content-end ">
        <div className="col-md-6 offset-1 bg-dark mt-3">
          <Form>
            <Field
              className="form-control mt-5"
              placeholder="UserName"
              name="userName"
            />
            <ErrorMessage name="userName" component={ErrorComponent} />
            <Field
              className="form-control mb-5 mt-3 "
              placeholder="Email"
              name="email"
              //  validate= {validateEmail}// by this way we can also set error if we dont wnat to use yup
            />
            <ErrorMessage name="email" component={ErrorComponent} />
            {/* {(error) => <ErrorComponent error={error} />} */}
            {/* </ErrorMessage> */}

            <FastField name="address">
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
            </FastField>
            <br />
            <Field
              name="social.facebook"
              placeholder="Facebook Id"
              className="form-control"
            />

            <br />
            <Field
              name="social.twitter"
              placeholder="Twiiter Id"
              className="form-control"
            />

            <br />
            <Field
              name="phone[0]"
              placeholder="Primary phone no"
              className="form-control"
            />

            <br />
            <Field
              name="phone[1]"
              placeholder="Secondary phone no"
              className="form-control"
            />

            <br />
            <FieldArray name="phNumbers">
              {(fieldArrayProp) => {
                const { push, remove, form } = fieldArrayProp;
                const { values } = form;
                const { phNumbers } = values;

                return (
                  <>
                    {phNumbers.map((phnumber, index) => {
                      return (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button
                              type="button"
                              onClick={() => {
                                remove(index);
                              }}
                            >
                              -
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => {
                              push("");
                            }}
                          >
                            +
                          </button>
                        </div>
                      );
                    })}
                  </>
                );
              }}
            </FieldArray>
            <Button onClick={()=>setFormValues(savedValues)} type="button" className="btn btn-danger btn-lg mb-5">
              Load Save Data
            </Button>
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
