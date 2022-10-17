import React, { useContext, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";

const CreateAlliance = () => {
  const { createAlliance } = useContext(KingdomContext);

  return (
    <div>
      <Formik
        initialValues={{
          tag: "",
          name: "",
          announcement: "",
        }}
        onSubmit={(values, actions) => {
          createAlliance(values);
          actions.resetForm();
          setOpen(false);
        }}
        validationSchema={yup.object().shape({
          kingdomNumber: yup.number().required("*Required field"),
          allianceTag: yup.string().required("*Required field"),
          allianceName: yup.string().required("*Required field"),
          announcement: yup.string().required("*Required field"),
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
              {errors.name && <Message error content={errors.name} />}
              {errors.tag && <Message error content={errors.tag} />}
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
                  value={values.tag}
                  error={errors.tag !== undefined}
                  onChange={handleChange}
                  placeholder="Alliance Tag"
                />
                <Form.Input
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
};
export default CreateAlliance;
