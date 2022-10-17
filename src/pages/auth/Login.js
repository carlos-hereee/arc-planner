import React, { useContext, useState } from "react";
import { Formik, Form, Field } from "formik";
import { AuthContext } from "../../utils/context/Auth/AuthContext";
import Icons from "../../components/atoms/Icons";
import { Link } from "react-router-dom";
import Spinner from "../../components/atoms/Spinner";
import * as yup from "yup";

const Login = () => {
  const { isLoading, signIn, signInError } = useContext(AuthContext);
  const [canSeePassword, setSeePassword] = useState(false);

  return (
    <section className="login card">
      <h3>Login</h3>
      {signInError && <p className="validate">{signInError}</p>}
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => signIn(values)}
        validationSchema={yup.object().shape({
          username: yup.string().required("*Required"),
          password: yup.string().required("*Required"),
        })}>
        {({ errors }) => (
          <Form className="form">
            <div className="form-field">
              <label htmlFor="username">
                Username{" "}
                {errors.username && (
                  <span className="validate">{errors.username}</span>
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
                  <span className="validate">{errors.password}</span>
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
            <div className="form-submit">
              <button type="submit" className="btn">
                {!isLoading ? "Sign In" : <Spinner />}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="wrapper">
        <Link to="/sign-up" className="link">
          Create an account?
        </Link>
      </div>
    </section>
  );
};
export default Login;
