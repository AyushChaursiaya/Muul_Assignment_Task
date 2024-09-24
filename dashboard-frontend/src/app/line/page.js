import LineChart from "@/components/LineChart";
import cube from "@cubejs-client/core";
import React from "react";

const page = async () => {
  const cubeApi = cube(process.env.CUBEJS_API_TOKEN, {
    apiUrl: 'http://localhost:4000/cubejs-api/v1',
  });

  // const lineChartData = await cubeApi.load(
  //   {
  //     measures: ["data_pipeline.totalValue"],
  //     timeDimensions: [
  //       {
  //         dimension: "data_pipeline.timestamp",
  //         // granularity: "hour",
  //       },
  //     ],
  //     order: {},
  //   }
  //   // {
  //   //   "measures": ["data_pipeline.totalValue"],
  //   //   "dimensions": ["data_pipeline.timestamp"],
  //   //   "timeDimensions": [{
  //   //     "dimension": {"data_pipeline.timestamp",
  //   //     "granularity": "day"  // Adjust granularity as needed (day, month, etc.)
  //   //   },
  //   // }],
  //   //   order: {},
  //   // }
  // );


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

  const myLineData = lineChartData.tablePivot();

  return (
    <div>
      <div className="text-center text-3xl font-semibold">Line Charts</div>
      <div>
        <LineChart data={myLineData} />
      </div>
    </div>
  );
};

export default page;
