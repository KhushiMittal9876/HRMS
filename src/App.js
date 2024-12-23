import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Attendance from './pages/Attendance';
import LeaveManagement from './pages/LeaveManagement';
import EmployeeDirectory from './pages/EmployeeDirectory';
import Addtheme from './pages/Addtheme';

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave-management" element={<LeaveManagement />} />
          <Route path="/employee-directory" element={<EmployeeDirectory />} />
          <Route path='/Addtheme' element={<Addtheme />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
