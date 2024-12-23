import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow-md rounded-md">Attendance Stats</div>
        <div className="p-4 bg-white shadow-md rounded-md">Leave Balance</div>
        <div className="p-4 bg-white shadow-md rounded-md">Pending Requests</div>
      </div>
    </div>
  );
};

export default Dashboard;
