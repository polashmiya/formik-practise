import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import ErrorMsg from "./ErrorMsg";

const initialValues = {
  name: "",
  username: "",
  email: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twiter: "",
  },
  phNumber: ["", ""],
  numbers: [""],
};
const onSubmit = (values, onSubmitProps) => {
  console.log("Values : ", values);
  onSubmitProps.resetForm();
};
const validationSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
  username: Yup.string().required("Username is Required"),
  address: Yup.string().required("Address is Required"),
});
//Field level validation
const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required a Commnet";
  }
  return error;
};
const Login = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // validateOnChange={false}
      // validateOnBlur={false}
    >
      <div className="form">
        <Form autoComplete="off">
          <h1>Login Form</h1>
          <div className="form-control">
            <Field type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" component={ErrorMsg} />
          </div>
          <div className="form-control">
            <Field type="text" name="username" placeholder="UserName" />
            <ErrorMessage name="username">
              {(ErrorMsg) => <div className="error">{ErrorMsg}</div>}
            </ErrorMessage>
          </div>
          <div className="form-control">
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" />
          </div>
          <div className="form-control">
            <Field
              as="textarea"
              name="comments"
              placeholder="Write Your Message"
              validate={validateComments}
            />
            <ErrorMessage name="comments" component={ErrorMsg} />
          </div>
          <div className="form-control">
            <Field name="address">
              {(props) => {
                const { field, form, meta } = props;
                return (
                  <div>
                    <input type="text" placeholder="Address" {...field} />
                    {meta.touched && meta.error ? (
                      <div className="error">{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>
          <div className="form-control">
            <Field name="social.facebook" placeholder="Facebook Profile" />
          </div>
          <div className="form-control">
            <Field name="social.twiter" placeholder="Twiter Profile" />
          </div>
          <div className="form-control">
            <Field
              type="text"
              placeholder="Primary PhNumber"
              name="phNumber[0]"
            />
          </div>
          <div className="form-control">
            <Field
              type="text"
              placeholder="Secondary PhNumber"
              name="phNumber[1]"
            />
          </div>
          <FieldArray name="numbers">
            {(fieldArraryProps) => {
              const { remove, form, push } = fieldArraryProps;
              const { numbers } = form.values;
              // console.log(form.errors);
              return (
                <div>
                  {numbers.map((number, index) => (
                    <div key={index}>
                      <Field name={`numbers[${index}]`} placeholder="Numbers" />
                      {index > 0 && (
                        <button type="button" onClick={() => remove(index)}>
                          -
                        </button>
                      )}
                      <button type="button" onClick={() => push("")}>
                        +
                      </button>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
          <button type="submit" className="btn">
            Login
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default Login;
