export const sampleEmployees = [
  { id: 1, name: 'John Doe', email: 'john@company.com', role: 'employee', tasksCompleted: 12, activeTasks: 3 },
  { id: 2, name: 'Jane Smith', email: 'jane@company.com', role: 'employee', tasksCompleted: 18, activeTasks: 2 },
  { id: 3, name: 'Admin User', email: 'admin@company.com', role: 'admin', tasksCompleted: 0, activeTasks: 0 },
];

export const sampleTasks = [
  {
    id: 1,
    title: 'Design Homepage Mockup',
    description: 'Create high-fidelity mockups for the new homepage',
    assignedTo: 1,
    assignedBy: 3,
    status: 'ongoing',
    priority: 'high',
    dueDate: '2025-12-20',
    createdAt: '2025-12-15',
  },
  {
    id: 2,
    title: 'Implement API Integration',
    description: 'Integrate REST API for user authentication',
    assignedTo: 2,
    assignedBy: 3,
    status: 'pending',
    priority: 'medium',
    dueDate: '2025-12-22',
    createdAt: '2025-12-16',
  },
  {
    id: 3,
    title: 'Write Unit Tests',
    description: 'Write comprehensive unit tests for auth module',
    assignedTo: 1,
    assignedBy: 3,
    status: 'completed',
    priority: 'low',
    dueDate: '2025-12-18',
    createdAt: '2025-12-14',
  },
];

export const STATUS_OPTIONS = ['all', 'pending', 'ongoing', 'completed', 'failed'];

export const PRIORITY_OPTIONS = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
];
