import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [input, setInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(input);
    if (input.length > 0) {
      addTodo(input);
      setInput("");
    }
  }
  return (
    <div className="p-4 flex justify-center items-center">
      <form className="flex gap-2 " onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a task"
          className="border p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-sky-500 text-white p-2">Add</button>
      </form>
    </div>
  );
};

export default Form;
