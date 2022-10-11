import React, { useContext, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";

import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";

export default function CreateAlliance() {
  const { createAlliance } = useContext(KingdomContext);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Formik
        initialValues={{
          kingdomNumber: "",
          allianceTag: "",
          allianceName: "",
          messageBoard: "",
        }}
        onSubmit={(values, actions) => {
          createAlliance(values);
          actions.resetForm();
          setOpen(false);
        }}
        validationSchema={yup.object().shape({
          kingdomNumber: yup.number().required("This is a required field"),
          allianceTag: yup.string().required("This is a required field"),
          allianceName: yup.string().required("This is a required field"),
          messageBoard: yup.string().required("This is a required field"),
        })}>
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <Modal
            as={Form}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<div className="btn">Create</div>}>
            <Modal.Header>Create Alliance</Modal.Header>
            <Modal.Content>
              {errors.allianceName && (
                <Message error content={errors.allianceName} />
              )}
              {errors.allianceTag && (
                <Message error content={errors.allianceTag} />
              )}
              {errors.kingdomNumber && (
                <Message error content={errors.kingdomNumber} />
              )}
              <Form loading={isSubmitting}>
                <Form.Input
                  required
                  label="Kingdom Number "
                  fluid
                  type="text"
                  name="kingdomNumber"
                  value={values.kingdomNumber}
                  onChange={handleChange}
                  error={errors.kingdomNumber}
                  placeholder="Kingdom Number"
                />
                <Form.Input
                  required
                  label="Alliance Tag "
                  fluid
                  type="text"
                  name="allianceTag"
                  value={values.allianceTag}
                  error={errors.allianceTag !== undefined}
                  onChange={handleChange}
                  placeholder="Alliance Tag"
                />
                <Form.Input
                  fluid
                  label="Alliance Name "
                  required
                  type="text"
                  value={values.allianceName}
                  error={errors.allianceName !== undefined}
                  onChange={handleChange}
                  name="allianceName"
                  placeholder="Alliance Name"
                />
                <Form.Input
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
            </Modal.Content>
            <Modal.Actions>
              <Button color="red" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button
                positive
                primary
                type="submit"
                onClick={handleSubmit}
                loading={isSubmitting}>
                Submit
              </Button>
            </Modal.Actions>
          </Modal>
        )}
      </Formik>
    </div>
  );
}
