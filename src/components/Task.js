import React from "react";

function Task({ task }) {
  const { text, category } = task;

  const handleDelete = () => {
    // Implement delete functionality here
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
