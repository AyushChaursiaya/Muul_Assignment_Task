import PieChart from "@/components/PieChart";
import cube from "@cubejs-client/core";
import React from "react";

const page = async () => {
  const cubeApi = cube(process.env.CUBEJS_API_TOKEN, {
    apiUrl: 'http://localhost:4000/cubejs-api/v1',
  });
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

  const pieChartData = await cubeApi.load({
    measures: ["data_pipeline.totalValue"],
    dimensions: ["data_pipeline.name"],
    order: {
      "data_pipeline.name": "asc",
    },
  });


  const myPieData = pieChartData.tablePivot();
  return (
    <div>
      <div className="text-center text-3xl font-semibold">Pie Charts</div>
      <div>
        <PieChart data={myPieData} fullPage={true} />
      </div>
    </div>
  );
};

export default page;
