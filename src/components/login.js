import React, { useContext, useState } from "react";
import { Formik, Form, Field } from "formik";

import { AuthContext } from "../utils/context/Auth/AuthState";
import { validateUsername, validatePassword } from "../utils/validateAuth";

export default function LogIn() {
  const { isLoading, signIn, signInError } = useContext(AuthContext);
  const [canSeePassword, setCanSeePassword] = useState(false);

  return (
    <div className="wrapper">
      <h1>Login</h1>
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
              <div className="validate">{errors.username}</div>
            )}
            <label>Username </label>
            <Field type="text" name="username" validate={validateUsername} />
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
              <Icon
                size="big"
                className="icon"
                name={canSeePassword ? "eye slash" : "eye"}
                onClick={() => setCanSeePassword(!canSeePassword)}
              />
            </div>
            <button type="submit" onClick={() => validateForm()}>
              {!isLoading ? "Sign In" : <Loader />}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
