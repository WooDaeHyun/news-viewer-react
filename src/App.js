import Categories from "./components/Categories";
import NewsList from "./components/NewsList";
import { useState, useCallback } from "react";

function App() {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => {
    return setCategory(category);
  }, []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
}

export default App;
