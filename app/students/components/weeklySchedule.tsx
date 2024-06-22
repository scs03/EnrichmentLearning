import React from 'react';

interface TableProps {
  className?: string;
}

const Table: React.FC<TableProps> = ({ className }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <div className="grid grid-cols-2 h-full">
        <div className="border border-white p-4 col-span-full text-center bg-primary rounded-t-lg">Schedule</div>
        <div className="border border-white p-4 text-center bg-secondary">M</div>
        <div className="border border-white p-4 text-center bg-accent">Advisory</div>
        <div className="border border-white p-4 text-center bg-secondary">T</div>
        <div className="border border-white p-4 text-center bg-accent">Advisory</div>
        <div className="border border-white p-4 text-center bg-secondary">W</div>
        <div className="border border-white p-4 text-center bg-accent">Open Area</div>
        <div className="border border-white p-4 text-center bg-secondary">Th</div>
        <div className="border border-white p-4 text-center bg-accent">Science Pull</div>
        <div className="border border-white p-4 text-center bg-secondary">F</div>
        <div className="border border-white p-4 text-center bg-accent rounded-b-lg">Lego Club</div>
      </div>
    </div>
  );
}

export default Table;
