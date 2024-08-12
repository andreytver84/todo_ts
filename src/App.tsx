import { Route, Routes } from "react-router-dom";
import "./App.css";
import Todo from "./pages/Todo";
import { useColorTheme } from "./store/useColorTheme";
import Task from "./pages/Task";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

function App() {
  const theme = useColorTheme((state) => state.theme);

  return (
    <div className={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Todo />} />
          <Route path="task/:id" element={<Task />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
