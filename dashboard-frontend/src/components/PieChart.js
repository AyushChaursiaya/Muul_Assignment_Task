"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import { pieData } from "@/utils/pieData";
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);
const commonOptions = {
  maintainAspectRatio: true,
  responsive: true,
  interaction: {
    intersect: false,
  },
  plugins: {
    legend: {
      position: "bottom",
    },
  },
  scales: {
    x: {
      ticks: {
        autoSkip: true,
        maxRotation: 0,
        padding: 12,
        minRotation: 0,
      },
    },
  },
};

const PieChart = ({ data, fullPage }) => {
  const finalData = pieData({data});
  // console.log('finalData =>', finalData);

  return (
    <Pie
      data={finalData}
      options={commonOptions}
      className={`piechart ${
        !fullPage && "md:max-w-[47%]"
      } min-w-[47%] max-w-full max-h-96 p-2`}
    />
  );
};

export default PieChart;
