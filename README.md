# 🚀 Workflow Manager - Enhanced Edition

A modern, feature-rich Workflow Management System built with React, Vite, and Tailwind CSS. Admins can manage employees and assign tasks, while employees can track and update their work in real-time.

## ✨ Features

### Admin Features
- 📊 Comprehensive dashboard with real-time statistics
- 👥 Add and manage employees
- 📋 Create and assign tasks with priorities
- 📈 Track team performance and task completion
- 🔍 Advanced search and filtering

### Employee Features
- 📱 Personal dashboard with assigned tasks
- ✅ Accept, start, and complete tasks
- 🔔 Real-time notifications
- 📊 Personal performance metrics
- 🎯 Priority-based task organization

### Technical Features
- ⚡ Lightning-fast with Vite
- 🎨 Modern UI with Tailwind CSS
- 🔄 Real-time state management
- 📱 Fully responsive design
- 🎯 Component-based architecture
- 🎭 Custom hooks for business logic

## 🛠️ Tech Stack

- **Framework:** React 18.3+
- **Build Tool:** Vite 6.0+
- **Styling:** Tailwind CSS 3.4+
- **Icons:** Lucide React
- **Language:** JavaScript (ES6+)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LostSkyWalker-1401/Workflow-Manager.git
   cd Workflow-Manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Tailwind CSS** (if not already installed)
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎯 Quick Start

### Default Login Credentials
- **Admin:** Click "Login as Admin"
- **Employee:** Click "Login as Employee"

## 📁 Project Structure

```
Workflow-Manager/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx          # Main dashboard component
│   │   ├── LoginScreen.jsx        # Authentication screen
│   │   ├── TaskCard.jsx           # Individual task display
│   │   ├── EmployeeCard.jsx       # Employee information card
│   │   ├── AddEmployeeModal.jsx   # Modal for adding employees
│   │   ├── AddTaskModal.jsx       # Modal for creating tasks
│   │   └── Notification.jsx       # Toast notification system
│   ├── hooks/
│   │   └── useWorkflowManager.js  # Custom hook for state management
│   ├── utils/
│   │   ├── helpers.js             # Utility functions
│   │   └── constants.js           # App constants and sample data
│   ├── App.jsx                    # Root component
│   ├── App.css                    # App-specific styles
│   ├── index.css                  # Global styles with Tailwind
│   └── main.jsx                   # Entry point
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Key Features Explained

### 1. **Dashboard Statistics**
Five KPI cards showing:
- Total tasks
- Pending tasks
- Ongoing tasks
- Completed tasks
- Failed tasks

### 2. **Task Management**
- **Priority Levels:** High, Medium, Low
- **Status Tracking:** Pending → Ongoing → Completed/Failed
- **Search & Filter:** Find tasks by title/description and filter by status
- **Due Dates:** Track deadlines with visual indicators

### 3. **Employee Management**
- Add new employees
- Track individual performance
- View active and completed tasks per employee
- Employee-specific dashboards

### 4. **Notifications**
- Real-time toast notifications
- Auto-dismiss after 5 seconds
- Success feedback for all actions

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Build for Production
```bash
npm run build
# Output will be in the 'dist' folder
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] Backend integration (Node.js + Express)
- [ ] Database support (MongoDB/PostgreSQL)
- [ ] User authentication with JWT
- [ ] File attachments for tasks
- [ ] Email notifications
- [ ] Task comments and activity log
- [ ] Calendar view
- [ ] Export reports (PDF/Excel)
- [ ] Dark mode
- [ ] Mobile app (React Native)

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Original Author

**AJAY2K0**  
- GitHub: [@AJAY2K0](https://github.com/AJAY2K0)

---

## 🔱 Fork Maintainer

**LostSkyWalker-1401**  
- GitHub: [@LostSkyWalker-1401](https://github.com/LostSkyWalker-1401)

> This repository is a fork of the original project by **AJAY2K0**, extended and maintained by **LostSkyWalker-1401**.

## 🙏 Acknowledgments

- React Team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for beautiful icons
- Vite for the blazing-fast build tool

---

Made with ❤️ by AJAY2K0
