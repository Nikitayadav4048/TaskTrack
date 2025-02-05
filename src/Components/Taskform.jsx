// import React from 'react';

import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, onClose, initialData }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (initialData) {
      setTask(initialData.title);
      setDescription(initialData.description);
      setTime(initialData.time);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({ title: task, description, time });
      onClose();
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded w-96">
      {/* <h2 className="text-xl font-bold mb-4">Task Form</h2> */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white mb-2">Task Name</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Description</label>
          <textarea
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default TaskForm;
