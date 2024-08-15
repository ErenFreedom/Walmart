import React from 'react';
import BarGraph from '../../components/Dashboard/BarGraph';
import PieChart from '../../components/Dashboard/PieChart';
import LineGraph from '../../components/Dashboard/LineGraph';
import RadarChart from '../../components/Dashboard/RadarChart';

const Dashboard = () => {
  return (
    <div className="bg-apple-black text-apple-white min-h-screen p-8 space-y-10">
      <h1 className="text-3xl font-bold text-center mb-10">Company Profit Analysis</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <BarGraph />
        </div>
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <PieChart />
        </div>
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <LineGraph />
        </div>
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <RadarChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
