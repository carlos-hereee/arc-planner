import React, { useContext, useState } from "react";
import { Formik, Form, Field } from "formik";
import { AuthContext } from "../utils/context/Auth/AuthState";
import { validateUsername, validatePassword } from "../utils/validateAuth";
import Icons from "./atoms/Icons";
import { Link } from "react-router-dom";

const Login = () => {
  const { isLoading, signIn, signInError } = useContext(AuthContext);
  const [canSeePassword, setSeePassword] = useState(false);

  return (
    <div>
      <h3>Login</h3>
      {signInError ? <p className="validate">{signInError}</p> : ""}
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, actions) => {
          signIn(values);
          actions.resetForm();
        }}>
        {({ errors, touched, validateForm }) => (
          <Form className="form">
            {errors.username && touched.username && (
              <span className="validate">{errors.username}</span>
            )}
            <label>Username </label>
            <Field type="text" name="username" validate={validateUsername} />
            {errors.password && touched.password && (
              <span className="validate">{errors.password}</span>
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
            <button type="submit" onClick={validateForm} className="btn">
              {!isLoading ? "Sign In" : <Loader />}
            </button>
          </Form>
        )}
      </Formik>
      <div className="wrapper">
        <Link to="/register" className="link">
          Create an account
        </Link>
      </div>
    </div>
  );
};
export default Login;
