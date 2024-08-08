import Dialog from "@mui/material/Dialog";
import { SimpleDialogProps } from "./interfaces_types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Card from "./Card";
import { Button } from "@mui/material";
import { useTodos } from "../store/useTodos";
import styles from "./SimpleDialog.module.css";
import clsx from "clsx";
import { format } from "date-fns";

const validationSchema = Yup.object({
  task: Yup.string()
    .min(5, "Must be 5 characters or more but less than 35")
    .max(35, "Must be 35 characters or less")
    .required("Required"),
});

const SimpleDialog = (props: SimpleDialogProps) => {
  const date = format(new Date(), "dd/MM HH:mm");

  const { onClose, open } = props;

  const addTodo = useTodos((state) => state.addTodo);

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Card>
        <h4>Add new task to list</h4>
        <Formik
          validationSchema={validationSchema}
          initialValues={{ task: "", quickly: false, detail: "" }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            addTodo(values.task, values.quickly, date, values.detail);
            handleClose();
            setSubmitting(true);
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className={styles.form}>
              <label>
                <span>Task is quickly: </span>
                <Field type="checkbox" name="quickly" />
              </label>

              <Field
                className={clsx(
                  errors.task && touched.task ? styles.error : ""
                )}
                type="text"
                name="task"
                placeholder="your task here..."
              />
              <ErrorMessage name="task" component="div" />
              <Field
                className={clsx(
                  errors.task && touched.task ? styles.error : ""
                )}
                type="text"
                name="detail"
                placeholder="Detail your task here..."
              />
              <ErrorMessage name="detail" component="div" />
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
