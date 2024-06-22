import React from 'react';
import NavBar from '../../components/navbar';
import Avatar from './avatar';
import Information from './components/information';
import dynamic from 'next/dynamic'; // Import dynamic for client-side rendering
import Advisor from './components/advisor';
import TrustCardTrueOrFalse from './components/trustCardTrueOrFalse';

const SchedulePage = dynamic(() => import('./components/schedulePage'), { ssr: false });

const Page = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
      <NavBar />

      <div className="flex-1 p-5">
        <div className="grid grid-cols-3 gap-4">
          {/* Avatar section (1/3 width) */}
          <div className="col-span-1 flex justify-center">
            <div className="flex justify-center items-start max-w-md">
              <Avatar />
            </div>
          </div>

          {/* Information section (2/3 width) */}
          <div className="col-span-2 flex flex-col justify-start">
            <div className="flex justify-center items-start h-full">
              <Information />
            </div>
          </div>
        </div>
        
        {/* Schedule and Info section */}
        <div className="grid grid-cols-3 gap-4 mt-5">
          {/* Schedule section (1/3 width) */}
          <div className="col-span-1 flex justify-center">
            <SchedulePage />
          </div>
          
          {/* Advisor and Trust Card section (2/3 width) */}
          <div className="col-span-2 flex flex-col justify-between h-full">
            <div className="flex-1 flex justify-center items-center">
              <Advisor />
            </div>
            <div className="flex-1 flex justify-center items-center mt-4">
              <TrustCardTrueOrFalse />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
