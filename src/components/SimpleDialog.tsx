import Dialog from "@mui/material/Dialog";
import { SimpleDialogProps } from "./interfaces_types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Card from "./Card";
import { Button } from "@mui/material";
import { useTodos } from "../store/useTodos";

const validationSchema = Yup.object({
  task: Yup.string()
    .min(5, "Must be 5 characters or more but less than 35")
    .max(35, "Must be 35 characters or less")
    .required("Required"),
});

const SimpleDialog = (props: SimpleDialogProps) => {
  const { onClose, open } = props;

  const addTodo = useTodos((state) => state.addTodo);

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Card>
        <Formik
          validationSchema={validationSchema}
          initialValues={{ task: "" }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values.task);
            addTodo(values.task);
            handleClose();
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="task" />
              <ErrorMessage name="task" component="div" />
              <Button type="submit" disabled={isSubmitting} variant="outlined">
                Add
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </Dialog>
  );
};

export default SimpleDialog;
