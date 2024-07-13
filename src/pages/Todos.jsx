import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { usePaginate } from "../hooks/usePaginate";

const Todos = () => {
  const todos = useFetch("https://jsonplaceholder.typicode.com/todos", []);
  const [quantity, setQuantity] = useState(20);

  const { currentData, nextPage, prevPage, totalPages, currentPage } =
    usePaginate(todos, quantity);

  return (
    <div>
      <h1>ToDos:</h1>
      {
        currentData.map(todo => {
          return <h2 key={todo.id}>{todo.title}</h2>
        })}

      <button onClick={prevPage} disabled={currentPage === 1}>
        anterior
      </button>

      <button disabled={totalPages === currentPage} onClick={nextPage}>
        siguiente
      </button>
      <button onClick={ ()=> setQuantity(5)}>5</button>
      <button onClick={ ()=> setQuantity(10)}>10</button>
      <button onClick={ ()=> setQuantity(15)}>15</button>
    </div>
  );
};

export default Todos;
