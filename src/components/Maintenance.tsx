import React from 'react';

const getFormattedDate = () => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  return today.toLocaleDateString('en-US', options);
};

const Maintenance: React.FC = () => {
  const todayDate = getFormattedDate();

  return (
    <div className="bg-yellow-200 text-yellow-800 p-4 mx-5 my-12 sm:m-20 rounded-lg max-w-md">
        <p>
            <strong>Notice:</strong> Today, {todayDate}, we will be performing maintenance, and the site will be temporarily unavailable.
            Please check back tomorrow. Thank you for your patience, and we apologize for any inconvenience caused.
        </p>
    </div>
  );
};

export default Maintenance;

