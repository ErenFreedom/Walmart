import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getChartData } from '../../services/chartData';

const BarChart = () => {
  const { barAndPieChartData } = getChartData();
  const [showPredicted, setShowPredicted] = useState(false);

  // Manually rigged data for Walmart
  const riggedData = barAndPieChartData.map(item => {
    if (item.name === 'Walmart') {
      return {
        ...item,
        current: Math.min(...barAndPieChartData.map(d => d.current)) + 100, // Setting Walmart current to 3rd/4th position
        predicted: Math.max(...barAndPieChartData.map(d => d.predicted)) + 1000, // Setting Walmart predicted to highest
      };
    }
    return item;
  });

  const colors = [
    '#1e90ff', // Blue for Walmart
    '#00fa9a', // Light Green for Amazon
    '#ff4500', // Orange-Red for eBay
    '#ffd700', // Gold for Target
    '#8a2be2', // Blue Violet for Best Buy
    '#32cd32', // Lime Green for Walmart Predicted
    '#ff6347', // Tomato Red for Amazon Predicted
    '#4682b4', // Steel Blue for eBay Predicted
    '#ffb6c1', // Light Pink for Target Predicted
    '#00bfff', // Deep Sky Blue for Best Buy Predicted
  ];

  const seriesData = [
    {
      name: 'Current Profit',
      data: riggedData.map((item, index) => ({
        y: item.current,
        color: colors[index],
      })),
    },
    ...(showPredicted
      ? [
          {
            name: 'Predicted Profit',
            data: riggedData.map((item, index) => ({
              y: item.predicted,
              color: colors[index + 5],
            })),
          },
        ]
      : []),
  ];

  const chartOptions = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
    },
    title: {
      text: `Current vs ${showPredicted ? 'Predicted' : ''} Profits`,
      style: { color: '#ffffff' },
    },
    xAxis: {
      categories: riggedData.map(item => item.name), // Company names on x-axis
      labels: {
        style: { color: '#ffffff', fontSize: '12px' },
        rotation: 0, // To ensure the labels are horizontal
      },
      title: {
        text: 'Company',
        style: { color: '#ffffff' },
      },
    },
    yAxis: {
      title: { text: 'Profit', style: { color: '#ffffff' } },
      labels: { style: { color: '#ffffff' } },
    },
    series: seriesData,
    legend: {
      itemStyle: { color: '#ffffff' },
      labelFormatter: function () {
        return `<span style="color: ${this.color}">${this.name}</span>`;
      },
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

export default BarChart;
