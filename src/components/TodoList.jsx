import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete }) => {
  return (
    <div className=" p-4 ">
      <h1 className="text-4xl">Your List</h1>
      {todos.map((todoItem, index) => (
        <TodoItem
          key={index}
          todoItem={todoItem}
          index={index}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
