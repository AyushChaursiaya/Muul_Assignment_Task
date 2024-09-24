// export const barData = ({data}) => {
//   const chartData = {
//     labels: data.map((item) => console.log(item)),
//     datasets: [
//       {
//         label: "products",
//         data: data.map((item) => item['data_pipeline.name']),
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//       },
//     ],
//   };
//   return chartData;
// };


export const barData = ({ data }) => {
  if (!data || !Array.isArray(data)) {
    console.error('Data is undefined or not an array:', data);
    return { labels: [], datasets: [] }; // Return empty chart data
  }

  console.log('barData =>', data);
  
  const chartData = {
    labels: data.map((item) => item["data_pipeline.name"] || 'Unknown'), // Assuming 'data_pipeline.name' exists
    datasets: [
      {
        label: "Value",
        data: data.map((item) => item['data_pipeline.totalValue'] || 0), // Assuming 'totalValue' is the field you want to plot
        // backgroundColor: "rgba(255, 99, 132, 0.5)", // Background color of the bars
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

