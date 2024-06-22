import React from 'react';

const OpenAreaCode = () => {
  return (
    <div className="card w-full h-full shadow-xl border border-gray-400 bg-secondary rounded-lg flex items-center justify-center">
      <div className="card-body">
        <div className="flex flex-col justify-center items-center">
          <p className="text-5xl mb-4 font-bold text-center">Open Area Room Code</p>
          <div className="flex items-center space-x-4">
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <button className="btn btn-primary rounded-full px-4 py-2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenAreaCode;
