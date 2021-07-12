import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
const RegistrationForm = () => {
  const radioOptions = [
    { key: "Email", value: "email" },
    { key: "Phone", value: "phone" },
  ];
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    contactWith: "",
    phone: "",
  };
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Email Required").email("Invalid Email"),
    password: Yup.string().required("Password Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .required("Required"),
    contactWith: Yup.string().required("ContactWith Required"),
    phone: Yup.string().when("contactWith", {
      is: "phone",
      then: Yup.string().required("Phone Required"),
    }),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
            />
            <FormikControl
              control="input"
              type="password"
              label="Confirm Password"
              name="confirmPassword"
            />
            <FormikControl
              control="radio"
              options={radioOptions}
              label="Contact With"
              name="contactWith"
            />
            <FormikControl
              control="input"
              type="text"
              label="Phone"
              name="phone"
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegistrationForm;
