import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  username: "",
  email: "",
};
const onSubmit = (values) => {
  console.log("Values : ", values);
};
const validationSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
  username: Yup.string().required("Username is Required"),
});
const OldLogin = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <>
      <div className="form">
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <h1>Login Form</h1>
          <div className="form-control">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form-control">
            <input
              type="text"
              name="username"
              placeholder="UserName"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="error">{formik.errors.username}</div>
            ) : null}
          </div>
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onBlur={formik.handleBlur}
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default OldLogin;
