import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  function addTodo(todoText) {
    setTodos([...todos, todoText]);
  }
  // console.log(todos);

  function onDelete(index) {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    console.log(index + "deleted");
  }
  return (
    <div className="  container bg-stone-100 mx-auto text-center flex-col gap-4">
      <h1 className="text-6xl p-4 ">Todo List</h1>
      <Form addTodo={addTodo} />
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  );
};

export default App;
