"use client";
import { lineData } from "../utils/lineData";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const commonOptions = {
  responsive: true,
  aspectRatio: 1,
  interaction: {
    intersect: false,
  },
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Chart showing values at different times",
    },
  },
  tension: 0.3,
};

const LineChart = ({ data, fullPage }) => {
  const finalData = lineData({ data });
  // console.log("Line Chart =>", finalData);

  return (
    <>
      <div className="flex justify-center w-full p-4">
        <Line
        data={finalData}
        options={commonOptions}
        
        className={`max-h-96 ${
          !fullPage && "md:max-w-[80%]"
        } max-w-full min-h-96 p-2 linechart w-full mt-8 max-h-96`}
      />
        {/* <LineChart data={myLineData} /> */}
      </div>
      
    </>
  );
};

export default LineChart;
