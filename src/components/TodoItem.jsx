import React from "react";
import { IconButton } from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid"; // Correct path for v2

const TodoItem = ({ todoItem, index, onDelete }) => {
  return (
    <div className="max-w-md p-4 flex justify-between items-center mx-auto">
      <span>{todoItem}</span>
      <div className="flex gap-6">
        <IconButton onClick={() => onDelete(index)}>
          <TrashIcon className="h-6 w-6 text-red-500" />
        </IconButton>
      </div>
    </div>
  );
};

export default TodoItem;
