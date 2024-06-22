"use client"
import React, { useState } from 'react';

const Table: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const namesData = [
    { id: 1, name: "Bob Ross", jobTitle: "Software Engineer", TrustCardStatus: "Blue" },
    { id: 2, name: "Jane Smith", jobTitle: "Marketing Specialist", TrustCardStatus: "Red" },
    { id: 3, name: "Alice Johnson", jobTitle: "Graphic Designer", TrustCardStatus: "Green" },
    { id: 4, name: "Bob Brown", jobTitle: "Project Manager", TrustCardStatus: "Yellow" },
    { id: 5, name: "Michael Lee", jobTitle: "Web Developer", TrustCardStatus: "Purple" },
    { id: 6, name: "Emily Wang", jobTitle: "Product Manager", TrustCardStatus: "Orange" },
    { id: 7, name: "Daniel Kim", jobTitle: "Software Architect", TrustCardStatus: "Blue" },
    { id: 8, name: "Maria Garcia", jobTitle: "HR Specialist", TrustCardStatus: "Pink" },
    { id: 9, name: "Yuki Tanaka", jobTitle: "UX Designer", TrustCardStatus: "Teal" },
    { id: 10, name: "Antonio Rossi", jobTitle: "Sales Representative", TrustCardStatus: "Red" },
    { id: 11, name: "Sophie Laurent", jobTitle: "Content Writer", TrustCardStatus: "Yellow" },
    { id: 12, name: "Muhammad Khan", jobTitle: "Quality Assurance", TrustCardStatus: "Green" },
    { id: 13, name: "Anastasia Ivanova", jobTitle: "Data Analyst", TrustCardStatus: "Purple" },
    { id: 14, name: "Luis Hernandez", jobTitle: "Financial Analyst", TrustCardStatus: "Blue" },
    { id: 15, name: "Isabella Costa", jobTitle: "Marketing Manager", TrustCardStatus: "Orange" },
    { id: 16, name: "Chen Wei", jobTitle: "Software Developer", TrustCardStatus: "Green" },
    { id: 17, name: "Oliver Schmidt", jobTitle: "Product Owner", TrustCardStatus: "Red" },
    { id: 18, name: "Elena Petrov", jobTitle: "UI Designer", TrustCardStatus: "Blue" },
    { id: 19, name: "Miguel Lopez", jobTitle: "Operations Manager", TrustCardStatus: "Yellow" },
    { id: 20, name: "Anna Novak", jobTitle: "Customer Support", TrustCardStatus: "Pink" },
    // Add more data as needed
  ];

  const filteredNames = namesData.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Directory</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="input input-bordered w-full max-w-xs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <div style={{ height: '28rem', overflowY: 'auto' }}>
          <table className="table w-full">
            <thead className="bg-gray-100 sticky top-0 z-10">
              <tr>
                <th className="p-2">#</th>
                <th className="p-2">Name</th>
                <th className="p-2">Job Title</th>
                <th className="p-2">Trust Card Status</th>
                <th className="p-2"></th>
              </tr>
            </thead>
            <tbody>
              {filteredNames.map((person, index) => (
                <tr key={person.id} className="hover:bg-gray-50">
                  <td className="p-2 border-t">{index + 1}</td>
                  <td className="p-2 border-t">
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={`https://api.dicebear.com/5.x/initials/svg?seed=${person.name}`}
                            alt={person.name}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{person.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 border-t">{person.jobTitle}</td>
                  <td className="p-2 border-t">{person.TrustCardStatus}</td>
                  <td className="p-2 border-t">
                    <button className="btn btn-ghost btn-xs">Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
