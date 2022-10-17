import { Form, Formik, Field } from "formik";
import * as yup from "yup";

const AllianceCreate = ({ setShow, create }) => {
  return (
    <Formik
      initialValues={{ tag: "", name: "", announcement: "" }}
      onSubmit={(values) => {
        create(values);
        setShow(false);
      }}
      validationSchema={yup.object().shape({
        tag: yup.string().required("*Required field"),
        name: yup.string().required("*Required field"),
        announcement: yup.string().required("*Required field"),
      })}>
      {({ errors }) => (
        <Form className="form">
          <div className="form-field">
            <label>
              Tag{" "}
              {errors.tag && <span className="validate">{errors.tag} </span>}
            </label>
            <div>
              <Field type="text" name="tag" />
            </div>
          </div>
          <div className="form-field">
            <label>
              Name{" "}
              {errors.name && <span className="validate">{errors.name} </span>}
            </label>
            <div>
              <Field type="text" name="name" />
            </div>
          </div>
          <div className="form-field">
            <label>
              Announcement{" "}
              {errors.announcement && (
                <span className="validate">{errors.announcement} </span>
              )}
            </label>
            <div>
              <Field type="text" name="announcement" component="textarea" />
            </div>
          </div>
          <div className="form-submit">
            <button onClick={() => setShow(false)} className="btn btn-danger">
              Cancel
            </button>
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default AllianceCreate;
