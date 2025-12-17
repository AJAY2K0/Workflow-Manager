import React from 'react';
import { Users } from 'lucide-react';

const LoginScreen = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-blue-600 rounded-full mb-4">
            <Users className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Workflow Manager</h1>
          <p className="text-gray-600">Streamline your team's productivity</p>
        </div>
        <div className="space-y-4">
          <button
            onClick={() => onLogin('admin')}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold"
          >
            Login as Admin
          </button>
          <button
            onClick={() => onLogin('employee')}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 rounded-xl font-semibold"
          >
            Login as Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
