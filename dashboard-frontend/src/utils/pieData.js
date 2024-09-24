export const pieData = ({ data }) => {
  // Return empty data if data is undefined or empty
  if (!data || !Array.isArray(data)) {
    console.error("Invalid data:", data);
    return {
      labels: [],
      datasets: [],
    };
  }


  const chartData = {
    labels: data.map((item) => item["data_pipeline.name"] || 'Unknown'), // Fallback in case of missing name
    datasets: [
      {
        label: "Value",
        data: data.map((item) => item["data_pipeline.totalValue"] || 0), // Fallback in case of missing value
        backgroundColor: [
          "#5b8ff9",
          "#5ad8a6",
          "#5e7092",
          "#f6bd18",
          "#6f5efa",
          "#6ec8ec",
          "#945fb9",
          "#ff9845",
          "#299796",
          "#fe99c3",
        ],
        borderColor: [
          "#d7e3fd",
          "#daf5e9",
          "#d6dbe4",
          "#fdeecd",
          "#dad8fe",
          "#dbf1fa",
          "#e4d7ed",
          "#ffe5d2",
          "#cce5e4",
          "#ffe6f0",
        ],
        borderWidth: 1,
      },
    ],
  };

  return chartData;
};
