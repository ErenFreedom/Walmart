import rawData from './data.json';

export const getChartData = () => {
  const first100Entries = rawData.slice(0, 100);

  const groupedData = first100Entries.reduce((acc, entry) => {
    const company = entry['Company Name'];
    const currentProfit = parseFloat(entry['Current Profit'].replace(/[$,]/g, ''));
    const predictedProfit = parseFloat(entry['Predicted Profit'].replace(/[$,]/g, ''));

    if (!acc[company]) {
      acc[company] = {
        currentProfitTotal: 0,
        predictedProfitTotal: 0,
        profitsOverTime: [],
      };
    }

    acc[company].currentProfitTotal += currentProfit;
    acc[company].predictedProfitTotal += predictedProfit;
    acc[company].profitsOverTime.push({
      current: currentProfit,
      predicted: predictedProfit,
    });

    return acc;
  }, {});

  const companies = ['Walmart', 'Amazon', 'eBay', 'Target', 'Best Buy'];

  const barAndPieChartData = companies.map(company => ({
    name: company,
    current: groupedData[company]?.currentProfitTotal || 0,
    predicted: groupedData[company]?.predictedProfitTotal || 0,
  }));

  const lineChartData = companies.map(company => ({
    name: company,
    profits: groupedData[company]?.profitsOverTime || [],
  }));

  const radarChartData = companies.map(company => ({
    name: company,
    ratio: groupedData[company]?.predictedProfitTotal / groupedData[company]?.currentProfitTotal || 0,
  }));

  return { barAndPieChartData, lineChartData, radarChartData };
};
