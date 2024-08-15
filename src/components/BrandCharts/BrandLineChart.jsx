import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getBrandData } from '../../services/brandData';

const BrandLineChart = ({ data }) => {
  const [showPredicted, setShowPredicted] = useState(false);

  const brandNames = data.map(item => item["Brand Name"]);
  const currentPrices = data.map(item => parseFloat(item["Current Price"].replace(/[$,]/g, '')));
  const predictedPrices = data.map(item => parseFloat(item["Predicted Price"].replace(/[$,]/g, '')));
  const currentProfits = data.map(item => parseFloat(item["Current Profit"].replace(/[$,]/g, '')));
  const predictedProfits = data.map(item => parseFloat(item["Predicted Profit"].replace(/[$,]/g, '')));

  const seriesData = [
    {
      name: 'Current Price',
      data: currentPrices,
      color: '#1e90ff', // Blue for current price
    },
    {
      name: 'Predicted Price',
      data: predictedPrices,
      color: '#32cd32', // Light green for predicted price
    },
    ...(showPredicted
      ? [{
          name: 'Current Profit',
          data: currentProfits,
          color: '#ff6347', // Tomato for current profit
        },
        {
          name: 'Predicted Profit',
          data: predictedProfits,
          color: '#ffd700', // Gold for predicted profit
        }]
      : []),
  ];

  const chartOptions = {
    chart: {
      type: 'line',
      backgroundColor: 'transparent',
    },
    title: {
      text: `Current vs Predicted Prices and Profits`,
      style: { color: '#ffffff' },
    },
    xAxis: {
      categories: brandNames, // Brand names on x-axis
      labels: {
        style: { color: '#ffffff', fontSize: '12px' },
        rotation: 0, // To ensure the labels are horizontal
      },
      title: {
        text: 'Brand',
        style: { color: '#ffffff' },
      },
    },
    yAxis: {
      title: { text: 'Price/Profit ($)', style: { color: '#ffffff' } },
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
        {showPredicted ? 'Show Prices Only' : 'Show Prices and Profits'}
      </button>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default BrandLineChart;
