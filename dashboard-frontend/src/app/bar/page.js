import BarChart from "@/components/BarChart";
import cube from "@cubejs-client/core";
import React from "react";

const page = async () => {
  const cubeApi = cube(process.env.CUBEJS_API_TOKEN, {
    apiUrl: 'http://localhost:4000/cubejs-api/v1',
  });

  // const barChartData = await cubeApi.load({
  //   measures: ["data_pipeline.count"],
  //   dimensions: ["data_pipeline.name"],
  //   order: [["data_pipeline.name", "asc"]],
  // });


  const barChartData = await cubeApi.load({
    measures: ["data_pipeline.totalValue"],
    dimensions: ["data_pipeline.name"],
    order: {
      "data_pipeline.name": "asc",
    },
  });

  const myBarData = barChartData.tablePivot();
  
  return (
    <div>
      <div className="text-center text-3xl font-semibold">Bar Charts</div>
      <div>
        <BarChart data={myBarData} fullPage={true} />
      </div>
    </div>
  );
};

export default page;
