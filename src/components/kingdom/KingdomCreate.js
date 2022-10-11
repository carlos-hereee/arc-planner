import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";
import * as yup from "yup";

const KingdomCreate = () => {
  const { createKingdom } = useContext(KingdomContext);
  return (
    <>
      <h2>Create Kingdom</h2>
      <Formik
        initialValues={{ name: "", announcement: "" }}
        onSubmit={(values) => createKingdom(values)}
        validationSchema={yup.object().shape({
          name: yup.string().required("*Required"),
          announcement: yup.string().required("*Required"),
        })}>
        {({ errors }) => (
          <Form className="form">
            <div className="form-field">
              <label htmlFor="name">
                Kingdom Name{" "}
                {errors.name && <span className="validate">{errors.name}</span>}
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
          </Form>
        )}
      </Formik>
    </>
  );
};

export default KingdomCreate;
