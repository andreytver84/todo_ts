import Card from "./Card";
import ItemList from "./ItemList";
import { useTodos } from "../store/useTodos";

const List = () => {
  const todoData = useTodos((state) => state.todos);
  console.log(todoData);
  return (
    <Card>
      <ul>
        {todoData.map((item) => (
          <li key={item.id}>
            <ItemList title={item.title} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default List;
