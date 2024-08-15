import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getChartData } from '../../services/chartData';

const RadarChart = () => {
  const { radarChartData } = getChartData();
  const [showPredicted, setShowPredicted] = useState(false);

  const chartOptions = {
    chart: {
      polar: true,
      type: 'line',
      backgroundColor: 'transparent',
    },
    title: {
      text: 'Current vs Predicted Profit Ratios',
      style: { color: '#ffffff' },
    },
    pane: {
      size: '80%',
    },
    xAxis: {
      categories: radarChartData.map(item => item.name),
      tickmarkPlacement: 'on',
      lineWidth: 0,
      labels: { style: { color: '#ffffff' } },
    },
    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0,
      labels: { style: { color: '#ffffff' } },
    },
    series: [
      {
        name: showPredicted ? 'Predicted Profit Ratio' : 'Current Profit Ratio',
        data: radarChartData.map(item => (showPredicted ? item.ratio : 1 / item.ratio)), // Flipping ratio to represent current when not in predicted mode
        pointPlacement: 'on',
        color: showPredicted ? '#00fa9a' : '#1e90ff',
      },
    ],
    legend: {
      itemStyle: { color: '#ffffff' },
    },
  };

  return (
    <div>
      <button
        onClick={() => setShowPredicted(!showPredicted)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        {showPredicted ? 'Show Current Data' : 'Show Predicted Data'}
      </button>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default RadarChart;
