import React, { useContext, useState } from "react";
import { Formik, Form, Field } from "formik";
import { AuthContext } from "../utils/context/AuthContext";
import {
  validatePassword,
  validateUsername,
  validateConfirmPassword,
} from "../utils/validateAuth";
import Icons from "./atoms/Icons";
import { Link } from "react-router-dom";

export default function Register() {
  const { register, isLoading, signUpError } = useContext(AuthContext);
  const [canSeePassword, setSeePassword] = useState(false);
  const [canSeeConfirmPassword, setSeeConfirmPassword] = useState(false);

  return (
    <section className="register card">
      <h2>Create an account</h2>
      {signUpError && <p className="validate">{signUpError}</p>}
      <Formik
        initialValues={{ username: "", password: "", confirmPassword: "" }}
        onSubmit={(values) => register(values)}>
        {({ errors, validateForm, values }) => (
          <Form className="form">
            <div className="form-field">
              <label htmlFor="username">
                Username{" "}
                {errors.username && (
                  <div className="validate">{errors.username}</div>
                )}
              </label>
              <div>
                <Field
                  type="text"
                  name="username"
                  validate={validateUsername}
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="password">
                Password{" "}
                {errors.password && (
                  <div className="validate">{errors.password}</div>
                )}
              </label>
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
                  <Icons
                    name={canSeePassword ? "eyeslash" : "eye"}
                    size={"2x"}
                  />
                </button>
              </div>
            </div>
            <div className="form-field">
              <label>
                Confirm Password{" "}
                {errors.confirmPassword && (
                  <div className="validate">{errors.confirmPassword}</div>
                )}
              </label>
              <div className="password">
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
                  onClick={() => setSeeConfirmPassword(!canSeeConfirmPassword)}>
                  <Icons
                    name={canSeeConfirmPassword ? "eyeslash" : "eye"}
                    size={"2x"}
                  />
                </button>
              </div>
            </div>
            <div className="form-submit">
              {!isLoading && (
                <button
                  type="submit"
                  className="btn"
                  onClick={() => validateForm()}>
                  Confirm
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
      <div className="wrapper">
        <Link to="/" className="link">
          Already have an account?
        </Link>
      </div>
    </section>
  );
}
