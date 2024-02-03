import React from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { TASKS, CATEGORIES } from "../data";

function App() {
  return (
    <div>
      <h2>Task List</h2>
      <CategoryFilter categories={CATEGORIES} />
      <TaskList tasks={TASKS} />
      <NewTaskForm categories={CATEGORIES} />
    </div>
  );
}

export default App;
