import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const Todos = () => {
  const todos = useFetch("https://jsonplaceholder.typicode.com/todos", []);

  return (
    <div>
      <h1>ToDos:</h1>
      {
        todos.map(todo => {
          return <h2 key={todo.id}>{todo.title}</h2>
        })}
    </div>
  );
};

export default Todos;
