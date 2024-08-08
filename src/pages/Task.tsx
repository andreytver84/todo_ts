import { Link, useParams } from "react-router-dom";

const Task = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <h1>Task #{id}</h1>
      <Link to="/">Return to main page</Link>
    </>
  );
};

export default Task;
