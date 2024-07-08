"use client";
import React, { useState } from 'react';

// Mock Data
const mockData = [
  {
    id: 1,
    name: "Cy Ganderton",
    studentID: "123456",
    outdoorArea: "Center",
    club: "Lego-Club",
    pullRequest: "None",
    trustCardStatus: "Active",
    attendance: "Absent", // Options: "Present", "Absent", "Tardy"
  },
  {
    id: 2,
    name: "Pat Johnson",
    studentID: "123457",
    outdoorArea: "East Wing",
    club: "Chess Club",
    pullRequest: "Approved",
    trustCardStatus: "Inactive",
    attendance: "Present", // Options: "Present", "Absent", "Tardy"
  },
];

const AdvisoryTable = () => {
  const [data, setData] = useState(mockData);

  const handleAttendanceChange = (index, newAttendance) => {
    const updatedData = [...data];
    updatedData[index].attendance = newAttendance;
    setData(updatedData);
  };




  return (
    <div className="">
      <table className="table overflow-x-auto outline rounded-lg outline-2 outline-secondary">
        <thead className="bg-secondary">
          <tr className="text-lg">
            <th></th>
            <th>Name</th>
            <th>ID</th>
            <th>Outdoor Area</th>
            <th>Club</th>
            <th>Pull Request</th>
            <th>Trust Card Status</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className="hover" key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.studentID}</td>
              <td>{item.outdoorArea}</td>
              <td>{item.club}</td>
              <td>{item.pullRequest}</td>
              <td>{item.trustCardStatus}</td>
              <td>
                <div className="dropdown dropdown-bottom">
                  <div tabIndex={0} role="button" className="justify-center btn m-1">
                    {item.attendance}
                  </div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li>
                      <a onClick={() => handleAttendanceChange(index, 'Present')}>Present</a>
                    </li>
                    <li>
                      <a onClick={() => handleAttendanceChange(index, 'Absent')}>Absent</a>
                    </li>
                    <li>
                      <a onClick={() => handleAttendanceChange(index, 'Tardy')}>Tardy</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-3 flex justify-end">
        <button className="btn rounded-lg btn-primary">Update</button>
      </div>
    </div>
  );
};

export default AdvisoryTable;
