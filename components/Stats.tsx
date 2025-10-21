
import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="bg-white p-6 rounded-xl shadow-md text-center">
    <p className="text-4xl font-extrabold text-gray-900">{value}</p>
    <p className="mt-1 text-base text-gray-600">{label}</p>
  </div>
);

const Stats: React.FC = () => {
  return (
    <div className="pb-16 lg:pb-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          <StatCard value="75%" label="of students get scholarships" />
          <StatCard value="500+" label="Universities, College & Institution" />
          <StatCard value="98%" label="Visa Grant Rate" />
          <StatCard value="20k" label="Happy Clients" />
        </div>
      </div>
    </div>
  );
};

export default Stats;
