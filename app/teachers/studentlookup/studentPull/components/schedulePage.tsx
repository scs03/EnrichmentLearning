"use client"
import React, { useState } from 'react';

interface ScheduleItem {
  day: string;
  subject: string;
  editable: boolean;
  tooltipText?: string;
}

const SchedulePage: React.FC = () => {
  const [schedule, setSchedule] = useState<ScheduleItem[]>([
    { day: 'Monday', subject: 'Math', editable: false, tooltipText: 'This subject cannot be changed.' },
    { day: 'Tuesday', subject: 'US History', editable: false, tooltipText: 'This subject takes priority and cannot be changed.' },
    { day: 'Wednesday', subject: 'Advisory', editable: true },
    { day: 'Thursday', subject: 'Science', editable: true },
    { day: 'Friday', subject: 'Lego Club', editable: false, tooltipText: 'This subject cannot be changed.' },
  ]);

  const handleSubjectChange = (index: number, newSubject: string) => {
    if (!schedule[index].editable) {
      return;
    }

    const updatedSchedule = [...schedule];
    updatedSchedule[index].subject = newSubject;
    setSchedule(updatedSchedule);
  };

  return (
    <div className="bg-gray-200 w-full h-full p-5">
      <table className="table-auto border-collapse border border-gray-800 w-full h-full">
        <thead>
          <tr>
            <th colSpan={2} className="border border-gray-800 px-4 py-2">Schedule</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-800 px-4 py-2">{item.day}</td>
              <td className="border border-gray-800 px-4 py-2 relative group">
                <input
                  type="text"
                  className="border border-gray-400 rounded px-2 py-1 w-full"
                  value={item.subject}
                  onChange={(e) => handleSubjectChange(index, e.target.value)}
                  disabled={!item.editable}
                />
                {!item.editable && (
                  <div className="absolute left-0 bottom-full mb-1 w-full p-2 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100">
                    {item.tooltipText}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SchedulePage;
