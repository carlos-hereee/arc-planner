import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";
import * as yup from "yup";
import Spinner from "../atoms/Spinner";

const KingdomCreate = ({ show, setNewKD }) => {
  const { createKingdom, isLoading } = useContext(KingdomContext);
  return (
    <>
      <h2>Create Kingdom</h2>
      <Formik
        initialValues={{ number: 0, announcement: "" }}
        onSubmit={(values) => createKingdom(values)}
        validationSchema={yup.object().shape({
          name: yup.string().required("*Required"),
          announcement: yup.string().required("*Required"),
        })}>
        {({ errors }) => (
          <Form className="form">
            <div className="form-field">
              <label htmlFor="name">
                Kingdom #{" "}
                {errors.number && (
                  <span className="validate">{errors.number}</span>
                )}
              </label>
              <div>
                <Field type="text" name="name" />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="announcement">
                Announcement{" "}
                {errors.announcement && (
                  <span className="validate">{errors.announcement}</span>
                )}
              </label>
              <div>
                <Field type="text" name="announcement" component="textarea" />
              </div>
            </div>
            <div className="form-submit">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => setNewKD(!show)}>
                Cancel
              </button>
              <button type="submit" className="btn">
                {!isLoading ? "Create" : <Spinner />}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default KingdomCreate;
