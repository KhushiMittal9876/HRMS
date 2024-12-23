import React from 'react';

const Attendance = () => {
  const attendanceData = [
    { date: '2024-12-01', checkIn: '9:00 AM', checkOut: '5:00 PM', status: 'Present' },
    { date: '2024-12-02', checkIn: '9:15 AM', checkOut: '5:00 PM', status: 'Late' },
    { date: '2024-12-03', checkIn: 'Absent', checkOut: '-', status: 'Absent' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Attendance</h1>
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-left text-sm uppercase text-gray-600">
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Check-In</th>
              <th className="px-6 py-3">Check-Out</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((entry, index) => (
              <tr key={index} className="border-b">
                <td className="px-6 py-4">{entry.date}</td>
                <td className="px-6 py-4">{entry.checkIn}</td>
                <td className="px-6 py-4">{entry.checkOut}</td>
                <td
                  className={`px-6 py-4 ${
                    entry.status === 'Absent'
                      ? 'text-red-500'
                      : entry.status === 'Late'
                      ? 'text-yellow-500'
                      : 'text-green-500'
                  }`}
                >
                  {entry.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
