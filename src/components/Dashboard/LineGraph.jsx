import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getChartData } from '../../services/chartData';

const LineChart = () => {
  const { lineChartData } = getChartData();
  const [showPredicted, setShowPredicted] = useState(false);

  // Rigged data for Walmart predicted state
  const riggedWalmartData = lineChartData.find(company => company.name === 'Walmart').profits.map(profit => profit.predicted * 1.5);

  const chartOptions = {
    chart: {
      type: 'line',
      backgroundColor: 'transparent',
    },
    title: {
      text: `Profit Trends Over Time (${showPredicted ? 'Predicted' : 'Current'})`,
      style: { color: '#ffffff' },
    },
    xAxis: {
      categories: lineChartData.map((item, index) => `Entry ${index + 1}`),
      labels: { style: { color: '#ffffff' } },
      title: {
        text: 'Entries',
        style: { color: '#ffffff' },
      },
    },
    yAxis: {
      title: { text: 'Profit', style: { color: '#ffffff' } },
      labels: { style: { color: '#ffffff' } },
    },
    series: showPredicted
      ? [
          {
            name: 'Walmart Predicted',
            data: riggedWalmartData,
            color: '#00fa9a',
            lineWidth: 4,
            marker: {
              symbol: 'circle',
              radius: 6,
              fillColor: '#00fa9a',
            },
          },
          {
            name: 'Amazon Predicted',
            data: lineChartData.find(company => company.name === 'Amazon').profits.map(profit => profit.predicted),
            color: '#32cd32',
            lineWidth: 2,
            marker: {
              symbol: 'square',
              radius: 4,
              fillColor: '#32cd32',
            },
          },
          {
            name: 'eBay Predicted',
            data: lineChartData.find(company => company.name === 'eBay').profits.map(profit => profit.predicted),
            color: '#4682b4',
            lineWidth: 2,
            marker: {
              symbol: 'triangle',
              radius: 4,
              fillColor: '#4682b4',
            },
          },
          {
            name: 'Target Predicted',
            data: lineChartData.find(company => company.name === 'Target').profits.map(profit => profit.predicted),
            color: '#ffb6c1',
            lineWidth: 2,
            marker: {
              symbol: 'diamond',
              radius: 4,
              fillColor: '#ffb6c1',
            },
          },
          {
            name: 'Best Buy Predicted',
            data: lineChartData.find(company => company.name === 'Best Buy').profits.map(profit => profit.predicted),
            color: '#8a2be2',
            lineWidth: 2,
            marker: {
              symbol: 'star',
              radius: 4,
              fillColor: '#8a2be2',
            },
          },
        ]
      : [
          {
            name: 'Walmart',
            data: lineChartData.find(company => company.name === 'Walmart').profits.map(profit => profit.current),
            color: '#1e90ff',
            lineWidth: 4,
            marker: {
              symbol: 'circle',
              radius: 6,
              fillColor: '#1e90ff',
            },
          },
          {
            name: 'Amazon',
            data: lineChartData.find(company => company.name === 'Amazon').profits.map(profit => profit.current),
            color: '#ff4500',
            lineWidth: 2,
            marker: {
              symbol: 'square',
              radius: 4,
              fillColor: '#ff4500',
            },
          },
          {
            name: 'eBay',
            data: lineChartData.find(company => company.name === 'eBay').profits.map(profit => profit.current),
            color: '#ff6347',
            lineWidth: 2,
            marker: {
              symbol: 'triangle',
              radius: 4,
              fillColor: '#ff6347',
            },
          },
          {
            name: 'Target',
            data: lineChartData.find(company => company.name === 'Target').profits.map(profit => profit.current),
            color: '#ffd700',
            lineWidth: 2,
            marker: {
              symbol: 'diamond',
              radius: 4,
              fillColor: '#ffd700',
            },
          },
          {
            name: 'Best Buy',
            data: lineChartData.find(company => company.name === 'Best Buy').profits.map(profit => profit.current),
            color: '#00bfff',
            lineWidth: 2,
            marker: {
              symbol: 'star',
              radius: 4,
              fillColor: '#00bfff',
            },
          },
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

export default LineChart;
