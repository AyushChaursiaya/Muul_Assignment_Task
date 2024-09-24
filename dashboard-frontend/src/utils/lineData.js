// export const lineData = ({data}) => {
//   console.log(data);
//   const chartData = {
//     labels: data.map((item) => item["data_pipeline.timestamp.hour"]),
//     datasets: [
//       {
//         fill: true,
//         // label: "values at different value",
//         label: "values at different times",
//         data: data.map((item) => item['data_pipeline.timestamp']),
//         borderColor: "rgb(53, 162, 235)",
//         backgroundColor: "rgba(53, 162, 235, 0.5)",
//         borderWidth: 1,
//       },
//     ],
//   };
//   return chartData;
// };



// export const lineData = ({ data }) => {
//   console.log("Incoming Data:", data); // Log the incoming data
//   if (!data || !Array.isArray(data)) {
//     console.error("Invalid data:", data);
//     return { labels: [], datasets: [] };// or return an empty object
//   }

//   const chartData = {
    
//     labels: data.map((item) => item["data_pipeline.timestamp"] || 'Unknown'),
//     datasets: [
//       {
//         fill: true,
//         label: "values at different times",
//         data: data.map((item) => item["data_pipeline.totalValue"] || 0),
//         // backgroundColor: "rgba(53, 162, 235, 0.5)",
//         backgroundColor: [
//           "#5b8ff9",
//           "#5ad8a6",
//           "#5e7092",
//           "#f6bd18",
//           "#6f5efa",
//           "#6ec8ec",
//           "#945fb9",
//           "#ff9845",
//           "#299796",
//           "#fe99c3",
//         ],
//         borderColor: [
//           "#d7e3fd",
//           "#daf5e9",
//           "#d6dbe4",
//           "#fdeecd",
//           "#dad8fe",
//           "#dbf1fa",
//           "#e4d7ed",
//           "#ffe5d2",
//           "#cce5e4",
//           "#ffe6f0",
//         ],
//         borderWidth: 1.4,
//       },
//     ],
//   };

//   console.log("Chart Data:", chartData); // Log the processed chart data
//   return chartData;
// };


export const lineData = ({ data }) => {
  console.log("Incoming Data:", data); // Log the incoming data
  
  if (!data || !Array.isArray(data)) {
    console.error("Invalid data:", data);
    return { labels: [], datasets: [] }; // Return an empty chart if data is invalid
  }

  // Map the timestamp to a readable format (e.g., HH:MM:SS)
  const chartData = {
    labels: data.map((item) => {
      const rawTimestamp = item["data_pipeline.timestamp"];
      return rawTimestamp ? new Date(rawTimestamp).toLocaleTimeString() : 'Unknown'; 
    }),
    datasets: [
      {
        fill: true,
        label: "Values at different times",
        data: data.map((item) => item["data_pipeline.totalValue"] || 0), // Ensure 'totalValue' is mapped correctly
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
        borderWidth: 1.4,
      },
    ],
  };

  console.log("Processed Chart Data:", chartData); // Log the processed chart data
  return chartData;
};