import React, { useState } from 'react';

const LeaveManagement = () => {
  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, name: 'Khushi Mittal', date: '2024-12-10', reason: 'Medical', status: 'Pending' },
    { id: 2, name: 'Raj Tiwari', date: '2024-12-15', reason: 'Vacation', status: 'Pending' },
  ]);

  const handleAction = (id, action) => {
    const updatedRequests = leaveRequests.map((request) =>
      request.id === id ? { ...request, status: action } : request
    );
    setLeaveRequests(updatedRequests);
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-8">Leave Management</h1>
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-left text-sm uppercase font-bold text-gray-800">
              <th className="px-6 py-3">Sr.no.</th>
              <th className="px-6 py-3">Employee</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Reason</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((request) => (
              <tr key={request.id} className="border-b">
                <td className="px-6 py-4">{request.id}</td>
                <td className="px-6 py-4">{request.name}</td>
                <td className="px-6 py-4">{request.date}</td>
                <td className="px-6 py-4">{request.reason}</td>
                <td className="px-6 py-4">{request.status}</td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    className="px-4 py-1 bg-green-500 text-white rounded-md"
                    onClick={() => handleAction(request.id, 'Approved')}
                  >
                    Approve
                  </button>
                  <button
                    className="px-4 py-1 bg-yellow-400 text-white rounded-md"
                    onClick={() => handleAction(request.id, 'Pending')}
                  >
                    Wait
                  </button>
                  <button
                    className="px-4 py-1 bg-red-500 text-white rounded-md"
                    onClick={() => handleAction(request.id, 'Rejected')}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveManagement;
