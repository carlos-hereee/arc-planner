import React, { useState, useContext } from "react";
import { Formik } from "formik";
import { KingdomContext } from "../../utils/context/Kingdom/KingdomContext";
import * as yup from "yup";

export default function CreateTeam({ eventId }) {
  const { createTeam } = useContext(KingdomContext);

  const [open, setOpen] = useState(false);
  return (
    <div>
      <Formik
        initialValues={{
          teamName: "",
        }}
        onSubmit={(values, actions) => {
          createTeam(values, eventId);
          actions.resetForm();
          setOpen(false);
        }}
        validationSchema={yup.object().shape({
          teamName: yup.string().required("This is a required field"),
        })}>
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <Modal
            as={Form}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button color="blue">Create a Team</Button>}>
            <Modal.Header>Create a Team</Modal.Header>
            <Modal.Content>
              {errors.teamName && <Message error content={errors.teamName} />}
              {errors.eventDescription && (
                <Message error content={errors.eventDescription} />
              )}
              {errors.eventDate && <Message error content={errors.eventDate} />}

              <Form loading={isSubmitting}>
                <Form.Input
                  required
                  label="Team Name"
                  fluid
                  type="text"
                  name="teamName"
                  value={values.teamName}
                  onChange={handleChange}
                  error={errors.teamName}
                  placeholder="Team Name"
                />
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button color="red" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button
                primary
                type="submit"
                color="blue"
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
