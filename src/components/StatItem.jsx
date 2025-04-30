import React from 'react';

const StatItem = ({ label, value }) => {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-gray-900">{value}</div>
      <div className="mt-2 text-base text-gray-500">{label}</div>
    </div>
  );
};

export default StatItem;
