import * as Yup from "yup";

const TaskSchema = Yup.object({
  title: Yup.string().required("fieldRequired"),
  details: Yup.string().required("fieldRequired"),
});

export default TaskSchema;
