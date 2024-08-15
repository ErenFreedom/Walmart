import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BrandRadarChart = ({ data }) => {
  const [showProfits, setShowProfits] = useState(false);

  console.log("Data in BrandRadarChart:", data);

  if (data.length === 0) {
    return <div>No data available for this department.</div>;
  }

  // Extracting brand names and their current/predicted prices and profits
  const brandNames = data.map(item => item["Brand Name"]);
  const currentPrices = data.map(item => parseFloat(item["Current Price"].replace(/[$,]/g, '')));
  const predictedPrices = data.map(item => parseFloat(item["Predicted Price"].replace(/[$,]/g, '')));
  const currentProfits = data.map(item => parseFloat(item["Current Profit"].replace(/[$,]/g, '')));
  const predictedProfits = data.map(item => parseFloat(item["Predicted Profit"].replace(/[$,]/g, '')));

  // Calculate ratios for current price vs predicted price and current profit vs predicted profit
  const priceRatios = data.map(item => {
    const currentPrice = parseFloat(item["Current Price"].replace(/[$,]/g, ''));
    const predictedPrice = parseFloat(item["Predicted Price"].replace(/[$,]/g, ''));
    return {
      currentRatio: (currentPrice / predictedPrice).toFixed(2),
      predictedRatio: (predictedPrice / currentPrice).toFixed(2)
    };
  });

  const profitRatios = data.map(item => {
    const currentProfit = parseFloat(item["Current Profit"].replace(/[$,]/g, ''));
    const predictedProfit = parseFloat(item["Predicted Profit"].replace(/[$,]/g, ''));
    return {
      currentRatio: (currentProfit / predictedProfit).toFixed(2),
      predictedRatio: (predictedProfit / currentProfit).toFixed(2)
    };
  });

  const seriesData = [
    {
      name: showProfits ? 'Current Profit Ratio' : 'Current Price Ratio',
      data: showProfits
        ? profitRatios.map(ratio => parseFloat(ratio.currentRatio))
        : priceRatios.map(ratio => parseFloat(ratio.currentRatio)),
      pointPlacement: 'on',
      color: '#1e90ff',
    },
    {
      name: showProfits ? 'Predicted Profit Ratio' : 'Predicted Price Ratio',
      data: showProfits
        ? profitRatios.map(ratio => parseFloat(ratio.predictedRatio))
        : priceRatios.map(ratio => parseFloat(ratio.predictedRatio)),
      pointPlacement: 'on',
      color: '#32cd32',
    },
  ];

  // Determine yAxis limits dynamically
  const allRatios = [
    ...priceRatios.map(ratio => parseFloat(ratio.currentRatio)),
    ...priceRatios.map(ratio => parseFloat(ratio.predictedRatio)),
    ...profitRatios.map(ratio => parseFloat(ratio.currentRatio)),
    ...profitRatios.map(ratio => parseFloat(ratio.predictedRatio)),
  ];

  const yAxisMax = Math.max(...allRatios) + 0.2; // Add some padding to the max value
  const yAxisMin = Math.min(...allRatios) - 0.2; // Add some padding to the min value

  const chartOptions = {
    chart: {
      polar: true,
      type: 'line',
      backgroundColor: 'transparent',
    },
    title: {
      text: `Current vs Predicted ${showProfits ? 'Profit Ratios' : 'Price Ratios'}`,
      style: { color: '#ffffff' },
    },
    pane: {
      size: '80%',
    },
    xAxis: {
      categories: brandNames,
      tickmarkPlacement: 'on',
      lineWidth: 0,
      labels: { style: { color: '#ffffff' } },
    },
    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: yAxisMin > 0 ? 0 : yAxisMin,  // Ensure the minimum value isn't negative
      max: yAxisMax,
      labels: { style: { color: '#ffffff' } },
      title: {
        text: 'Ratio',
        style: { color: '#ffffff' },
      },
    },
    series: seriesData,
    legend: {
      itemStyle: { color: '#ffffff' },
    },
  };

  return (
    <div>
      <button 
        onClick={() => setShowProfits(!showProfits)} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        {showProfits ? 'Show Price Ratios' : 'Show Profit Ratios'}
      </button>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default BrandRadarChart;
