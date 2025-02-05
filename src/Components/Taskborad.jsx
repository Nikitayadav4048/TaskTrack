import React, { useState, useEffect } from "react";
import { FaHeart, FaCheckCircle } from 'react-icons/fa';
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import TaskForm from "./Taskform"; // Adjust the import path as needed
import Modal from "./Modal"; // Import the Modal component

function TaskBoard({ title, description, time, updateTask, deleteTask, index, isFavourite, isComplete }) {
  const [isFavorite, setFavourite] = useState(isFavourite);
  const [isCompleteState, setComplete] = useState(isComplete);
  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    setFavourite(isFavourite);
  }, [isFavourite]);

  useEffect(() => {
    setComplete(isComplete);
  }, [isComplete]);

  const handleFavoriteClick = () => {
    setFavourite(!isFavorite);
    updateTask({ title, description, time, isFavourite: !isFavorite, isComplete: isCompleteState }, index);
  };

  const handleCompleteClick = () => {
    setComplete(!isCompleteState);
    updateTask({ title, description, time, isFavourite: isFavorite, isComplete: !isCompleteState }, index);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleUpdateTask = (task) => {
    updateTask(task, index);
    setEditing(false);
  };

  const handleDeleteClick = () => {
    deleteTask(index);
  };

  return (
    <div className="bg-gray-800 p-6 rounded shadow-lg w-auto h-auto"> {/* Set width and height to auto */}
      <Modal isOpen={isEditing} onClose={() => setEditing(false)}>
        <TaskForm
          addTask={handleUpdateTask}
          onClose={() => setEditing(false)}
          initialData={{ title, description, time }} // Pass initial task data to the form
        />
      </Modal>
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <div className="flex items-center space-x-2">
          <button className="text-white text-2xl" onClick={handleEditClick}>
            <BiSolidEdit />
          </button>
          <button className="text-white text-2xl" onClick={handleDeleteClick}>
            <MdDelete />
          </button>
        </div>
      </div>
      <p className="text-gray-400 pt-3 text-2xl">{description}</p>
      <div className="mt-4 flex items-center">
        <button className={`flex items-center pr-8 pt-7 ${isFavorite ? 'text-red-500' : 'text-white'}`} onClick={handleFavoriteClick}>
          <FaHeart className={`text-2xl mr-3 ${isFavorite ? 'text-red-500' : 'text-white'}`} />
          Favourite
        </button>
        <button className={`flex items-center pt-7 ${isCompleteState ? 'text-green-500' : 'text-white'}`} onClick={handleCompleteClick}>
          <FaCheckCircle className={`text-2xl mr-3 ${isCompleteState ? 'text-green-500' : 'text-white'}`} />
          Complete
        </button>
      </div>
    </div>
  );
}

export default TaskBoard;
