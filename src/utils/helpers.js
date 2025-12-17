export const getPriorityColor = (priority) => {
  const colors = {
    high: 'bg-red-100 text-red-800 border-red-300',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    low: 'bg-green-100 text-green-800 border-green-300',
  };
  return colors[priority] || colors.medium;
};

export const getStatusColor = (status) => {
  const colors = {
    pending: 'bg-gray-100 text-gray-800',
    ongoing: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
    failed: 'bg-red-100 text-red-800',
  };
  return colors[status] || colors.pending;
};

export const calculateStats = (tasks, currentUser) => {
  if (!currentUser) return null;

  const userTasks = tasks.filter(t =>
    currentUser.role === 'admin' ? true : t.assignedTo === currentUser.id
  );

  return {
    total: userTasks.length,
    pending: userTasks.filter(t => t.status === 'pending').length,
    ongoing: userTasks.filter(t => t.status === 'ongoing').length,
    completed: userTasks.filter(t => t.status === 'completed').length,
    failed: userTasks.filter(t => t.status === 'failed').length,
  };
};

export const filterTasks = (tasks, searchQuery, statusFilter, currentUser) => {
  return tasks.filter(task => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'all' || task.status === statusFilter;
    const isRelevant =
      currentUser?.role === 'admin' || task.assignedTo === currentUser?.id;

    return matchesSearch && matchesStatus && isRelevant;
  });
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
