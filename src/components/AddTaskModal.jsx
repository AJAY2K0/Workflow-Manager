import React, { useState } from 'react';
import { PRIORITY_OPTIONS } from '../utils/constants';

const AddTaskModal = ({ employees, onClose, onSubmit }) => {
  const [data, setData] = useState({
    title: '',
    description: '',
    assignedTo: '',
    priority: 'medium',
    dueDate: '',
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Assign Task</h2>

        <input className="w-full mb-2 border p-2" placeholder="Title"
          onChange={e => setData({ ...data, title: e.target.value })} />

        <textarea className="w-full mb-2 border p-2" placeholder="Description"
          onChange={e => setData({ ...data, description: e.target.value })} />

        <select className="w-full mb-2 border p-2"
          onChange={e => setData({ ...data, assignedTo: e.target.value })}>
          <option value="">Select employee</option>
          {employees.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
        </select>

        <select className="w-full mb-2 border p-2"
          onChange={e => setData({ ...data, priority: e.target.value })}>
          {PRIORITY_OPTIONS.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
        </select>

        <input type="date" className="w-full mb-4 border p-2"
          onChange={e => setData({ ...data, dueDate: e.target.value })} />

        <div className="flex gap-3">
          <button onClick={() => onSubmit(data)} className="bg-purple-600 text-white px-4 py-2 rounded">
            Assign
          </button>
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
