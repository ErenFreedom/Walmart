import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BrandPieChart = ({ data }) => {
  const [showProfits, setShowProfits] = useState(false);

  if (data.length === 0) {
    return <div>No data available for this department.</div>;
  }

  // Extracting brand names and their current/predicted prices and profits
  const currentPrices = data.map(item => ({
    name: item["Brand Name"],
    y: parseFloat(item["Current Price"].replace(/[$,]/g, '')),
    color: '#1e90ff',
  }));
  const predictedPrices = data.map(item => ({
    name: item["Brand Name"],
    y: parseFloat(item["Predicted Price"].replace(/[$,]/g, '')),
    color: '#32cd32',
  }));
  const currentProfits = data.map(item => ({
    name: item["Brand Name"],
    y: parseFloat(item["Current Profit"].replace(/[$,]/g, '')),
    color: '#ff6347',
  }));
  const predictedProfits = data.map(item => ({
    name: item["Brand Name"],
    y: parseFloat(item["Predicted Profit"].replace(/[$,]/g, '')),
    color: '#ffd700',
  }));

  // Calculate total profits for current and predicted
  const totalCurrentProfit = currentProfits.reduce((acc, item) => acc + item.y, 0).toFixed(2);
  const totalPredictedProfit = predictedProfits.reduce((acc, item) => acc + item.y, 0).toFixed(2);

  // Calculate the percentage increase in profit
  const profitIncreasePercentage = (((totalPredictedProfit - totalCurrentProfit) / totalCurrentProfit) * 100).toFixed(2);

  // Determine the series data based on the toggle state
  const priceData = showProfits ? predictedPrices : currentPrices;
  const profitData = showProfits ? predictedProfits : currentProfits;

  // Chart options for prices pie chart
  const priceChartOptions = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
    },
    title: {
      text: `${showProfits ? 'Predicted' : 'Current'} Prices`,
      style: { color: '#ffffff' },
    },
    series: [
      {
        name: 'Price',
        data: priceData,
        innerSize: '50%',
      },
    ],
    legend: {
      itemStyle: { color: '#ffffff' },
    },
  };

  // Chart options for profits pie chart
  const profitChartOptions = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
    },
    title: {
      text: `${showProfits ? 'Predicted' : 'Current'} Profits`,
      style: { color: '#ffffff' },
    },
    series: [
      {
        name: 'Profit',
        data: profitData,
        innerSize: '50%',
      },
    ],
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
        {showProfits ? 'Show Current Data' : 'Show Predicted Data'}
      </button>
      <div className="flex justify-between space-x-8">
        <div className="w-1/2">
          <HighchartsReact highcharts={Highcharts} options={priceChartOptions} />
        </div>
        <div className="w-1/2">
          <HighchartsReact highcharts={Highcharts} options={profitChartOptions} />
          <div className="mt-4 text-white text-lg">
            <strong>{showProfits ? 'Predicted' : 'Current'} Total Profit:</strong> ${showProfits ? totalPredictedProfit : totalCurrentProfit}
          </div>
          {showProfits && (
            <div className="text-white text-lg">
              <strong>Percentage Increase in Profit:</strong> {profitIncreasePercentage}%
            </div>
          )}
          <div className="mt-4 text-white text-lg">
            <strong>Overall Current Profit:</strong> ${totalCurrentProfit}
          </div>
          <div className="text-white text-lg">
            <strong>Overall Predicted Profit:</strong> ${totalPredictedProfit}
          </div>
        </div>
      </div>
      <div className="mt-4 text-white">
        <strong>Legend:</strong>
        <ul>
          <li><span style={{ color: '#1e90ff' }}>■ Current Price</span></li>
          <li><span style={{ color: '#32cd32' }}>■ Predicted Price</span></li>
          <li><span style={{ color: '#ff6347' }}>■ Current Profit</span></li>
          <li><span style={{ color: '#ffd700' }}>■ Predicted Profit</span></li>
        </ul>
      </div>
    </div>
  );
};

export default BrandPieChart;
