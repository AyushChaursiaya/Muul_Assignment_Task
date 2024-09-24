import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import MyTable from "@/components/Table";
import cube from "@cubejs-client/core";
import { CircularProgress } from "@mui/material";

export default async function Home() {
  // const cubeApi = cube(process.env.CUBEJS_API_TOKEN, {
  //   apiUrl: process.env.CUBEJS_API_URL,
  // });
  // debugger
  console.log("API Token:", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjcxMDI4MDQsImV4cCI6MTcyOTY5NDgwNH0.H-c4d5Z-9YTS8d3jysPbdqPcRCRqzpb-__iOu_ICvG4');
  console.log("API URL:", 'http://localhost:4000/cubejs-api/v1');

  const cubeApi = cube(process.env.NEXT_PUBLIC_CUBEJS_API_TOKEN, {
    apiUrl: 'http://localhost:4000/cubejs-api/v1',
  });
  

  // console.log("API URL:", process.env.NEXT_PUBLIC_CUBEJS_API_URL);
  // console.log("API Token:", process.env.NEXT_PUBLIC_CUBEJS_API_TOKEN);


  // const lineChartData = await cubeApi.load({
  //   // measures: ["data_pipeline.totalValue"],
  //   timeDimensions: [
  //     {
  //       dimension: "data_pipeline.timestamp",
  //       granularity: "hour",
  //     },
  //   ],
  //   order: {},
  // });

  // const barChartData = await cubeApi.load({
  //   // measures: ["data_pipeline.totalValue"],
  //   dimensions: ["data_pipeline.name"],
  //   order: [["data_pipeline.name", "asc"]],
  // });

  // const pieChartData = await cubeApi.load({
  //   // measures: ["data_pipeline.totalValue"],
  //   timeDimensions: [
  //     {
  //       dimension: "data_pipeline.timestamp",
  //     },
  //   ],
  //   dimensions: ["data_pipeline.name"],
  //   order: [["data_pipeline.name", "asc"]],
  // });


  const tableChartData = await cubeApi.load({
    // measures: ["data_pipeline.totalValue"],
    dimensions: ["data_pipeline.id", "data_pipeline.name", "data_pipeline.value", "data_pipeline.timestamp"],
    order: [["data_pipeline.name", "asc"]],
  });

  // const tableData = await cubeApi.load({
  //   measures: ["data_pipeline.totalValue"],
  //   dimensions: ["data_pipeline.id", "data_pipeline.name", "data_pipeline.value", "data_pipeline.timestamp"],
  //   order: [["data_pipeline.name", "asc"]],
  // });
  

  const lineChartData = await cubeApi.load({
    measures: ["data_pipeline.totalValue"],
    timeDimensions: [
      {
        dimension: "data_pipeline.timestamp",
        granularity: "hour",
      },
    ],
    order: {
      "data_pipeline.timestamp": "asc",
    },
  });
  
  const barChartData = await cubeApi.load({
    measures: ["data_pipeline.totalValue"],
    dimensions: ["data_pipeline.name"],
    order: {
      "data_pipeline.name": "asc",
    },
  });
  
  const pieChartData = await cubeApi.load({
    measures: ["data_pipeline.totalValue"],
    dimensions: ["data_pipeline.name"],
    order: {
      "data_pipeline.name": "asc",
    },
  });

  const myLineData = lineChartData.tablePivot();
  const myBarData = barChartData.tablePivot();
  const myPieData = pieChartData.tablePivot();
  const tableColumns = tableChartData.tableColumns();
  const mytableData = tableChartData.tablePivot();


  if (!myLineData || !myBarData || !myPieData) {
    return (
      <div className="w-full lg:w-[calc(100vw-270px)] lg:ml-[250px] flex justify-center items-center h-[calc(100vh-64px)]">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="max-w-full lg:max-w-[calc(100vw-270px)] p-2">
      <div className="flex  p-4 md:max-w-full justify-between flex-wrap">
        {myPieData && <PieChart data={myPieData} />}
        {myBarData && <BarChart data={myBarData} />}
      </div>
      {myLineData && (
        <LineChart data={myLineData} />
        // <div className="flex justify-center max-w-full p-4">
        //   {/* {" "} */}
        //   <LineChart data={myLineData} />
        // </div>
      )}
      <div>
        <MyTable data={mytableData} columns={tableColumns} />
      </div>
    </div>
  );
}
