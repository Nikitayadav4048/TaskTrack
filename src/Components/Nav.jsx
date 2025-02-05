import React, { useState } from "react";
import TaskForm from "./Taskform";
import Sidebar from "./Sidebar";
import TaskBoard from "./Taskborad";
import Modal from "./Modal"; 

const Nav = () => {
  const [isTaskFormOpen, setTaskFormOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); 

  const handlebtn = () => {
    setTaskFormOpen(!isTaskFormOpen);
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "all") return true;
    if (filter === "favourite") return task.isFavourite;
    if (filter === "complete") return task.isComplete;
    if (filter === "inProgress") return !task.isComplete  && !task.isFavourite;
    return false;
  });

  return (
    <>
      <div className="flex h-screen bg-gray-900 text-white">
        <Sidebar onFilterChange={handleFilterChange} /> {/* Pass the filter change handler */}
        <div className="flex-1 p-8 overflow-x-hidden overflow-y-scroll">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold ml-5">All Tasks</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-9" onClick={handlebtn}>
              New Task
            </button>
          </div>
          <Modal isOpen={isTaskFormOpen} onClose={handlebtn}>
            <TaskForm addTask={addTask} onClose={handlebtn} />
          </Modal>
          <div>
            {filteredTasks.length > 0 ? (
              <div className="mt-6 space-y-4">
                {filteredTasks.map((task, index) => (
                  <TaskBoard
                    key={index}
                    index={index}
                    title={task.title}
                    description={task.description}
                    time={task.time}
                    isFavourite={task.isFavourite}
                    isComplete={task.isComplete}
                    updateTask={updateTask}
                    deleteTask={deleteTask} 
                  />
                ))}
              </div>
            ) : (
              <p>No tasks to display.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
