import React, { useState } from 'react';

const AddEmployeeModal = ({ onClose, onSubmit }) => {
  const [data, setData] = useState({ name: '', email: '' });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add Employee</h2>

        <input
          className="w-full mb-3 border p-2 rounded"
          placeholder="Name"
          value={data.name}
          onChange={e => setData({ ...data, name: e.target.value })}
        />
        <input
          className="w-full mb-4 border p-2 rounded"
          placeholder="Email"
          value={data.email}
          onChange={e => setData({ ...data, email: e.target.value })}
        />

        <div className="flex gap-3">
          <button onClick={() => onSubmit(data)} className="bg-blue-600 text-white px-4 py-2 rounded">
            Add
          </button>
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
