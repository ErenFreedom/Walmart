import React from 'react';
import { useParams } from 'react-router-dom';
import BrandBarChart from '../../components/BrandCharts/BrandBarChart';
import BrandLineChart from '../../components/BrandCharts/BrandLineChart';
import BrandPieChart from '../../components/BrandCharts/BrandPieChart';
import BrandRadarChart from '../../components/BrandCharts/BrandRadarChart';
import { getBrandData } from '../../services/brandData';

const Department = () => {
  const { departmentName } = useParams();
  const data = getBrandData(departmentName);

  console.log("Department Name:", departmentName);
  console.log("Fetched Data for Department:", data);

  return (
    <div className="bg-apple-black text-apple-white min-h-screen p-8 space-y-10">
      <h1 className="text-3xl font-bold text-center mb-10">{departmentName} Analysis</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <BrandBarChart data={data} />
        </div>
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <BrandPieChart data={data} />
        </div>
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <BrandLineChart data={data} />
        </div>
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <BrandRadarChart data={data} />
        </div>
      </div>
    </div>
  );
};

export default Department;
