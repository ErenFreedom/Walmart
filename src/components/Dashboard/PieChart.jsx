import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getChartData } from '../../services/chartData';

const DoublePieChart = () => {
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

  const chartOptions = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
    },
    title: {
      text: 'Current vs Predicted Market Share',
      style: { color: '#ffffff' },
    },
    plotOptions: {
      pie: {
        innerSize: showPredicted ? '50%' : '0%', // To create a donut chart effect when showing predicted data
        depth: 45,
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: { color: '#ffffff' },
        },
      },
    },
    series: [
      {
        name: showPredicted ? 'Current Profit' : 'Profit',
        data: riggedData.map(item => ({
          name: item.name,
          y: item.current,
        })),
        size: showPredicted ? '60%' : '100%', // Size for the inner pie or full pie
        showInLegend: true,
        dataLabels: {
          enabled: !showPredicted, // Disable data labels on the inner pie for double pie chart
        },
      },
      ...(showPredicted
        ? [
            {
              name: 'Predicted Profit',
              data: riggedData.map(item => ({
                name: item.name,
                y: item.predicted,
              })),
              size: '80%',
              innerSize: '60%',
              showInLegend: true,
              dataLabels: {
                enabled: true, // Enable data labels on the outer pie
              },
            },
          ]
        : []),
    ],
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

export default DoublePieChart;
