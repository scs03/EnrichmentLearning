"use client";
import React from 'react'

const ClubTable = () => {
  return (
    <div className="">
        <div className="overflow-x-auto outline rounded-lg outline-2 outline-secondary">
            <table className="table">
                {/* head */}    
                <thead className="bg-secondary">
                    <tr className="text-lg">
                        <th>Total Students <br/> 1/30</th>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Club</th>
                        <th>Pull Request</th>
                        <th>Trust Card Status</th>
                        <th>Attendance</th>
                        <th>Tardy</th>
                    </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr className="hover">
                    <td>1</td>
                    <td>Cy Ganderton</td>
                    <td>123456</td>
                    <td>Lego-Club</td>
                    <td>None</td>
                    <td>Active</td>
                    <td>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                    </td>
                    <td>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ClubTable
