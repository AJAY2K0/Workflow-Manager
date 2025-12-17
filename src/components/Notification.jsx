import React from 'react';
import { Bell } from 'lucide-react';

const Notification = ({ notifications }) => {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map(notif => (
        <div
          key={notif.id}
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 notification-enter"
        >
          <Bell className="w-5 h-5" />
          {notif.message}
        </div>
      ))}
    </div>
  );
};

export default Notification;
