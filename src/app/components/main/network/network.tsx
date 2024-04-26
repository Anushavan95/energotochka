import React from "react";

const Network = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold mb-4">быстрая связь</h3>
      <input
        type="text"
        className="block w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:shadow-outline"
        placeholder="Enter your text here"
      />
      <input
        type="text"
        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Enter your text here"
      />
    </div>
  );
};

export default Network;
