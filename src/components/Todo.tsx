import Bar from "./Bar";
import Header from "./Header";
import List from "./List";

const Todo = () => {
  return (
    <div className="todo-wrap">
      <Header />
      <Bar />
      <List />
    </div>
  );
};

export default Todo;
