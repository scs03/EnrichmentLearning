"use client";
import React from 'react'

const mockData = [
    { id: 1, name: "Cy Ganderton",
     studentID: "123456", outdoorArea: "Center",
      club: "Lego-Club", pullRequest: "None",
       trustCardStatus: "Active", attendance: false,
        tardy: false },
    { id: 2, name: "Pat Johnson",
     studentID: "123457", outdoorArea: "East Wing",
      club: "Chess Club", pullRequest: "Approved",
       trustCardStatus: "Inactive", attendance: true,
        tardy: false },
    
]

const AdvisoryTable = () => {
  const data = mockData;
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
                    <th>Tardy</th>
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
                            <label>
                                <input type="checkbox" className="checkbox" checked={item.attendance} />
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" className="checkbox" checked={item.tardy} />
                            </label>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className='my-3 flex justify-end'>
            <button className="btn rounded-lg btn-primary">Update</button>
        </div>
    </div>
  )
  
}



export default AdvisoryTable
