import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Attendance from './pages/Attendance';
import LeaveManagement from './pages/LeaveManagement';
import EmployeeDirectory from './pages/EmployeeDirectory';
import Addtheme from './pages/Addtheme';

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"; // Default to "light" theme
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme); // Apply theme to body
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Persist the theme
  };

  return (
    <div className="flex h-screen" data-theme={theme}>
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave-management" element={<LeaveManagement />} />
          <Route path="/employee-directory" element={<EmployeeDirectory />} />
          <Route path='/Addtheme' element={<Addtheme onThemeChange={handleThemeChange} />}  />
        </Routes>
      </div>
    </div>
  );
};

export default App;
