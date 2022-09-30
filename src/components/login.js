import React, { useContext, useState } from "react";
import { Formik, Form, Field } from "formik";
import { AuthContext } from "../utils/context/Auth/AuthState";
import { validateUsername, validatePassword } from "../utils/validateAuth";
import Icons from "./atoms/Icons";

const Login = () => {
  const { isLoading, signIn, signInError } = useContext(AuthContext);
  const [canSeePassword, setSeePassword] = useState(false);

  return (
    <div>
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
              <button
                className="btn"
                type="button"
                onClick={() => setSeePassword(!canSeePassword)}>
                <Icons name={canSeePassword ? "eyeslash" : "eye"} size={"2x"} />
              </button>
            </div>
            <button type="submit" onClick={() => validateForm()}>
              {!isLoading ? "Sign In" : <Loader />}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Login;
