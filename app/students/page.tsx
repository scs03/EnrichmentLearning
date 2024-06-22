import React from 'react';
import NavbarStudent from './components/navbarStudent';
import Avatar from './components/avatar';
import Information from './components/information';
import Table from './components/weeklySchedule';
import Advisory from './components/advisor';
import TrustCardReturnDate from './components/trustCardReturnDate';
import ClubRoomCode from './components/clubRoomCode';
import OpenAreaCode from './components/openAreaCode';

const StudentPage: React.FC = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
      <NavbarStudent />
      <div className="flex-1 p-5 grid grid-cols-3 gap-4">
        <div className="col-span-1 flex justify-center">
          <Avatar />
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <Information />
        </div>
      </div>
      <div className="p-5 grid grid-cols-4 gap-4 flex-1">
        <div className="col-span-1">
          <Table />
        </div>
        <div className="col-span-3 grid grid-rows-2 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Advisory />
            <OpenAreaCode />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <TrustCardReturnDate />
            <ClubRoomCode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
