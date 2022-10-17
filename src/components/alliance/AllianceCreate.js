import React, { useContext, useState } from "react";
import { Form, Formik, Field } from "formik";
import * as yup from "yup";
import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";

const AllianceCreate = ({ setShow }) => {
  const { createAlliance } = useContext(KingdomContext);

  return (
    <div>
      <Formik
        initialValues={{ tag: "", name: "", announcement: "" }}
        onSubmit={(values) => {
          createAlliance(values);
          setShow(false);
        }}
        validationSchema={yup.object().shape({
          tag: yup.string().required("*Required field"),
          name: yup.string().required("*Required field"),
          announcement: yup.string().required("*Required field"),
        })}>
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <>
            <Form>
              {errors.name && <Message error content={errors.name} />}
              {errors.tag && <Message error content={errors.tag} />}
              <Field
                required
                label="Alliance Tag "
                fluid
                type="text"
                name="allianceTag"
                value={values.tag}
                error={errors.tag !== undefined}
                onChange={handleChange}
                placeholder="Alliance Tag"
              />
              <Field
                fluid
                label="Alliance Name "
                required
                type="text"
                value={values.name}
                error={errors.name !== undefined}
                onChange={handleChange}
                name="allianceName"
                placeholder="Alliance Name"
              />
              <Field
                fluid
                label="Message Board "
                required
                type="text"
                value={values.messageBoard}
                error={errors.messageBoard !== undefined}
                onChange={handleChange}
                name="messageBoard"
                placeholder="Message"
              />
            </Form>
            <div>
              <button
                color="red"
                onClick={() => setShow(false)}
                className="btn">
                Cancel
              </button>
              <button
                positive
                className="btn"
                type="submit"
                onClick={handleSubmit}
                loading={isSubmitting}>
                Submit
              </button>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
};
export default AllianceCreate;
