"use client";

import React, { useState } from "react";
import Modal from "react-modal";

const TimePickerModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [time, setTime] = useState("");

  const handleInputChange = (event) => {
    setTime(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(time);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Pick Time Modal"
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md p-6 shadow-md"
      overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
    >
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-4">Pick a time for OA</h2>
        <input
          type="datetime-local"
          value={time}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default TimePickerModal;
