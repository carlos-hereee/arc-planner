import { useContext } from "react";
import React from "react";
import { Formik, Form, Field } from "formik";
import { Icon } from "semantic-ui-react";

import { AuthContext } from "../../utils/context/Auth/AuthState";
import { validateField, validateNumber } from "../../utils/validateAuth";

export default function ProfileContent() {
  const { user } = useContext(AuthContext);
  function addGovernorName(name) {
    console.log("name", name);
  }
  return (
    <div>
      <div className="card">
        {user && user.governorName ? (
          <>
            <lavel>Governor name:</lavel>
            <p>{user.governorName}</p>
            <Icon name="pencil" />
          </>
        ) : (
          <Formik
            initialValues={{
              governorName: "",
              cityHall: "",
              castleLevel: "",
            }}
            onSubmit={(values, actions) => {
              addGovernorName(values);
            }}>
            {({ errors, touched, validateForm }) => (
              <Form className="form">
                <label>Governor name:</label>
                {errors.governorName && touched.governorName && (
                  <div className="validate">{errors.governorName}</div>
                )}
                <Field
                  type="text"
                  name="governorName"
                  validate={validateField}
                />

                <label>City Hall Level:</label>
                {errors.cityHall && touched.cityHall && (
                  <div className="validate">{errors.cityHall}</div>
                )}
                <Field type="text" name="cityHall" validate={validateNumber} />
                <label>Castle Level:</label>
                {errors.castleLevel && touched.castleLevel && (
                  <div className="validate">{errors.castleLevel}</div>
                )}
                <Field
                  type="text"
                  name="castleLevel"
                  validate={validateNumber}
                />
                <button type="submit" onClick={() => validateForm()}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        )}
      </div>
      <div className="card">{user && user.email}</div>
    </div>
  );
}
