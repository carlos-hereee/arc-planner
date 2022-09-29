import React, { useState, useContext } from "react";
import { Formik } from "formik";
import * as yup from "yup";

import { PlayerContext } from "../../utils/context/Player/PlayerState";

export default function CreateEvent() {
  const { createEvents } = useContext(PlayerContext);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Formik
        initialValues={{
          eventName: "",
          eventDescription: "",
          startDate: "",
          endDate: "",
        }}
        onSubmit={(values, actions) => {
          createEvents(values);
          actions.resetForm();
          setOpen(false);
        }}
        validationSchema={yup.object().shape({
          eventName: yup.string().required("This is a required field"),
          eventDescription: yup.string().required("This is a required field"),
          startDate: yup.date().required("This is a required field"),
          endDate: yup.date().required("This is a required field"),
        })}>
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <Modal
            as={Form}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button color="green">Create An Event</Button>}>
            <Modal.Header>Create Event</Modal.Header>
            <Modal.Content>
              {errors.eventName && <Message error content={errors.eventName} />}
              {errors.eventDescription && (
                <Message error content={errors.eventDescription} />
              )}
              {errors.eventDate && <Message error content={errors.eventDate} />}

              <Form loading={isSubmitting}>
                <Form.Input
                  required
                  label="Event Name"
                  fluid
                  type="text"
                  name="eventName"
                  value={values.eventName}
                  onChange={handleChange}
                  error={errors.eventName}
                  placeholder="Event Name"
                />
                <Form.Input
                  required
                  label="Event Description"
                  fluid
                  type="text"
                  name="eventDescription"
                  value={values.eventDescription}
                  onChange={handleChange}
                  error={errors.eventDescription}
                  placeholder="Event Description"
                />
                <Form.Group widths="equal">
                  <Form.Input
                    required
                    label="Start Date"
                    fluid
                    type="date"
                    name="startDate"
                    value={values.startDate}
                    onChange={handleChange}
                    error={errors.startDate}
                  />
                  <Form.Input
                    required
                    label="End Date"
                    fluid
                    type="date"
                    name="endDate"
                    value={values.endDate}
                    onChange={handleChange}
                    error={errors.endDate}
                  />
                </Form.Group>
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
