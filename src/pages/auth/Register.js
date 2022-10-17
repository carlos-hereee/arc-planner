import React, { useContext, useState } from "react";
import { Formik, Form, Field } from "formik";
import { AuthContext } from "../../utils/context/Auth/AuthContext";
import Icons from "../../components/atoms/Icons";
import { Link } from "react-router-dom";
import * as yup from "yup";

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
        onSubmit={(values) => register(values)}
        validationSchema={yup.object().shape({
          username: yup.string().required("*Required"),
          password: yup.string().required("*Required"),
          confirmPassword: yup
            .string()
            .test("passwords-match", "Passwords must match", (values) => {
              return this.parent.password === values;
            }),
        })}>
        {({ errors }) => (
          <Form className="form">
            <div className="form-field">
              <label htmlFor="username">
                Username{" "}
                {errors.username && (
                  <div className="validate">{errors.username}</div>
                )}
              </label>
              <div>
                <Field type="text" name="username" />
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
                <button type="submit" className="btn">
                  Confirm
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
      <div className="wrapper">
        <Link to="/login" className="link">
          Already have an account?
        </Link>
      </div>
    </section>
  );
}
