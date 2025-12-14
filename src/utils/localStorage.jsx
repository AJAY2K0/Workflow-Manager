export const defaultEmployees = [
  {
    id: 10234,
    adminId: 59827,
    dob: "1999-05-12",
    name: "Rohit Sharma",
    email: "employee1@gmail.com",
    password: "123",
    gender: "male",
    tasks: [
      {
        title: "Update Homepage Banner",
        description:
          "Replace the old Diwali sale banner with the new Winter Fest banner.",
        date: "03/11/2025",
        category: "Frontend",
        status: "completed",
        pending: false,
        completed: true,
        inProgress: false,
        failed: false,
      },
      {
        title: "Fix Navbar Responsiveness",
        description:
          "Resolve navigation bar alignment issues on small screen devices.",
        date: "04/11/2025",
        category: "Bug Fix",
        status: "inProgress",
        pending: false,
        completed: false,
        inProgress: true,
        failed: false,
      },
      {
        title: "Add Testimonials Section",
        description:
          "Create and style a new testimonials section using the latest designs.",
        date: "06/11/2025",
        category: "Frontend",
        status: "pending",
        pending: true,
        completed: false,
        inProgress: false,
        failed: false,
      },
    ],
    taskCount: {
      pending: 1,
      completed: 1,
      inProgress: 1,
      failed: 0,
    },
  },
  {
    id: 45891,
    adminId: 59827,
    name: "Priya Nair",
    email: "employee2@gmail.com",
    password: "123",
    gender: "female",
    dob: "2000-11-23",
    tasks: [
      {
        title: "Redesign Login Page",
        description:
          "Implement new UI for the login page as per updated mockups.",
        date: "05/11/2025",
        category: "Frontend",
        status: "completed",
        pending: false,
        completed: true,
        inProgress: false,
        failed: false,
      },
      {
        title: "Integrate Payment Gateway",
        description:
          "Set up Razorpay integration and handle successful payment redirects.",
        date: "07/11/2025",
        category: "Backend",
        status: "inProgress",
        pending: false,
        completed: false,
        inProgress: true,
        failed: false,
      },
      {
        title: "Check Broken Links",
        description: "Scan the entire website for broken or redirected URLs.",
        date: "08/11/2025",
        category: "Testing",
        status: "pending",
        pending: true,
        completed: false,
        inProgress: false,
        failed: false,
      },
      {
        title: "Fix Footer Issue",
        description: "Resolve alignment issue in the footer on small screens.",
        date: "09/11/2025",
        category: "Bug Fix",
        status: "failed",
        pending: false,
        completed: false,
        inProgress: false,
        failed: true,
      },
    ],
    taskCount: {
      pending: 1,
      completed: 1,
      inProgress: 1,
      failed: 1,
    },
  },
  {
    id: 72954,
    adminId: 59827,
    name: "Arjun Mehta",
    email: "employee3@gmail.com",
    password: "123",
    dob: "1998-02-08",
    gender: "male",
    tasks: [
      {
        title: "API Error Handling",
        description:
          "Improve error responses and implement global exception handling.",
        date: "04/11/2025",
        category: "Backend",
        status: "completed",
        pending: false,
        completed: true,
        inProgress: false,
        failed: false,
      },
      {
        title: "Database Index Optimization",
        description:
          "Add indexes to improve query performance for large tables.",
        date: "05/11/2025",
        category: "Database",
        status: "inProgress",
        pending: false,
        completed: false,
        inProgress: true,
        failed: false,
      },
      {
        title: "Fix Authentication Bug",
        description: "Resolve issue causing session timeout after page reload.",
        date: "03/11/2025",
        category: "Bug Fix",
        status: "failed",
        pending: false,
        completed: false,
        inProgress: false,
        failed: true,
      },
    ],
    taskCount: {
      pending: 0,
      completed: 1,
      inProgress: 1,
      failed: 1,
    },
  },
  {
    id: 38420,
    adminId: 59827,
    name: "Neha Singh",
    email: "employee4@gmail.com",
    password: "123",
    dob: "2001-09-17",
    gender: "female",
    tasks: [
      {
        title: "Design Landing Page",
        description:
          "Create an attractive landing page for the new product launch.",
        date: "05/11/2025",
        category: "Design",
        status: "completed",
        pending: false,
        completed: true,
        inProgress: false,
        failed: false,
      },
      {
        title: "Setup Unit Testing",
        description: "Add Jest/based testing for newly added React components.",
        date: "07/11/2025",
        category: "Testing",
        status: "inProgress",
        pending: false,
        completed: false,
        inProgress: true,
        failed: false,
      },
      {
        title: "Content Upload",
        description:
          "Upload product images and content provided by the marketing team.",
        date: "08/11/2025",
        category: "Content",
        status: "pending",
        pending: true,
        completed: false,
        inProgress: false,
        failed: false,
      },
    ],
    taskCount: {
      pending: 1,
      completed: 1,
      inProgress: 1,
      failed: 0,
    },
  },
  {
    id: 91567,
    adminId: 59827,
    name: "Vikram Patel",
    email: "employee5@gmail.com",
    password: "123",
    gender: "male",
    dob: "1997-12-30",
    tasks: [
      {
        title: "Deploy to Production",
        description: "Deploy the latest stable build to the production server.",
        date: "04/11/2025",
        category: "DevOps",
        status: "completed",
        pending: false,
        completed: true,
        inProgress: false,
        failed: false,
      },
      {
        title: "Server Log Monitoring",
        description: "Check and fix error logs from last deployment.",
        date: "05/11/2025",
        category: "Maintenance",
        status: "inProgress",
        pending: false,
        completed: false,
        inProgress: true,
        failed: false,
      },
      {
        title: "Add Dark Mode Feature",
        description: "Implement dark mode toggle using CSS variables.",
        date: "06/11/2025",
        category: "Frontend",
        status: "pending",
        pending: true,
        completed: false,
        inProgress: false,
        failed: false,
      },
    ],
    taskCount: {
      pending: 1,
      completed: 1,
      inProgress: 1,
      failed: 0,
    },
  },
];

const defaultAdmin = [
  {
    adminId: 59827,
    name: "Justcool",
    email: "ajaymaheria01@gmail.com",
    gender: "male",
    dob: "2000-03-08",
    password: "123",
  },
];

const STORAGE_KEY = "data";

export const getLocalStorage = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);

    // init once only if empty
    const initial = { employees: defaultEmployees, admin: defaultAdmin };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    return initial;
  } catch (err) {
    console.warn("getLocalStorage error:", err);
    return { employees: defaultEmployees, admin: defaultAdmin };
  }
};

export const saveLocalStorage = (obj) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
  } catch (err) {
    console.warn("saveLocalStorage error:", err);
  }
};
