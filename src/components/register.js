import React, { useContext, useState } from "react";
import { Formik, Form, Field } from "formik";

import { AuthContext } from "../utils/context/Auth/AuthState";
import {
  validateEmail,
  validatePassword,
  validateUsername,
  validateConfirmPassword,
  validategovName,
} from "../utils/validateAuth";
import Icons from "./atoms/Icons";

export default function Register() {
  const { register } = useContext(AuthContext);
  const [canSeePassword, setSeePassword] = useState(false);
  const [canSeeConfirmPassword, setSeeConfirmPassword] = useState(false);

  return (
    <section className="register">
      <h2>Create an account</h2>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          inGameName: "",
        }}
        onSubmit={(values) => {
          register(values);
        }}>
        {({ errors, touched, validateForm, values }) => (
          <Form className="form">
            {errors.username && touched.username && (
              <div className="validate">{errors.username}</div>
            )}
            <label>Username </label>
            <Field type="text" name="username" validate={validateUsername} />
            {errors.inGameName && touched.inGameName && (
              <div className="validate">{errors.inGameName}</div>
            )}
            <label>Govenor Name</label>
            <Field type="text" name="inGameName" validate={validategovName} />
            {errors.email && touched.email && (
              <div className="validate">{errors.email}</div>
            )}
            <label>Email </label>
            <Field type="text" name="email" validate={validateEmail} />
            {errors.password && touched.password && (
              <div className="validate">{errors.password}</div>
            )}
            <label>Password </label>
            <div className="password">
              <Field
                type={canSeePassword ? "text" : "password"}
                name="password"
                validate={validatePassword}
              />
              <button
                className="btn"
                type="button"
                onClick={() => setSeePassword(!canSeePassword)}>
                <Icons name={canSeePassword ? "eyeslash" : "eye"} size={"2x"} />
              </button>
            </div>
            {errors.confirmPassword && touched.confirmPassword && (
              <div className="validate">{errors.confirmPassword}</div>
            )}
            <label>Confirm Password </label>
            <Field
              type={canSeeConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              validate={(value) =>
                validateConfirmPassword(values.password, value)
              }
            />
            <button
              className="btn"
              type="button"
              onClick={() => setSeeConfirmPassword(!canSeePassword)}>
              <Icons
                name={canSeeConfirmPassword ? "eyeslash" : "eye"}
                size={"2x"}
              />
            </button>
            <button type="submit" onClick={() => validateForm()}>
              {/* {!isLoading ? "Register" : <Loader />} */}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
}
