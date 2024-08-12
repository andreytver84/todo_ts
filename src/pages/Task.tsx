import { Link, useParams } from "react-router-dom";
import { useTodos } from "../store/useTodos";

const Task = () => {
  const { id } = useParams();

  const getTask = useTodos((state) => state.getTask);
  const data = id ? getTask(id) : { title: "", date: "", body: "" };
  return (
    <>
      <h1>{data.title}</h1>
      <p>Date: {data.date}</p>
      <p>{data.body}</p>
      <Link to="/">Return to main page</Link>
    </>
  );
};

export default Task;
