import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
const FormikContainer = () => {
  const optionDropdown = [
    { key: "Select a Option", value: "" },
    { key: "Option One", value: "Option One" },
    { key: "Option Two", value: "Option Two" },
    { key: "Option Three", value: "Option Three" },
  ];
  const radioOption = [
    { key: "Male", value: "Male" },
    { key: "Female", value: "Female" },
    { key: "Others", value: "Others" },
  ];
  const checkboxOption = [
    { key: "Bike", value: "Bike" },
    { key: "Phone", value: "Phone" },
    { key: "laptop", value: "laptop" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkbox: [],
    birthdate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Email Required"),
    description: Yup.string().required("Desc Required"),
    selectOption: Yup.string().required("Select a Option"),
    radioOption: Yup.string().required("Select Your Gender"),
    birthdate: Yup.date().required("BirthDate Required").nullable(),
  });
  const onSubmit = (values) => {
    console.log("Form Data", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form className="form">
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="textarea"
            type="text"
            label="Description"
            name="description"
          />
          <FormikControl
            control="select"
            label="Select Option"
            options={optionDropdown}
            name="selectOption"
          />
          <FormikControl
            control="radio"
            label="Gender"
            options={radioOption}
            name="radioOption"
          />
          <FormikControl
            control="checkbox"
            label="CheckBox Option"
            options={checkboxOption}
            name="checkbox"
          />
          <FormikControl control="date" label="Birth Date" name="birthdate" />
          <button type="submit" className="btn">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
