import "./App.css";
import Todo from "./components/Todo";
import { useColorTheme } from "./store/useColorTheme";

function App() {
  const theme = useColorTheme((state) => state.theme);

  return (
    <div className={theme}>
      <Todo />
    </div>
  );
}

export default App;
