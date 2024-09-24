"use client";
import { barData } from "@/utils/barData";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
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

const BarChart = ({ data, fullPage }) => {
  const finalData = barData({data});
  
  return (
    <Bar
      data={finalData}
      options={commonOptions}
      className={`max-h-96 ${
        !fullPage && "md:max-w-[47%]"
      } max-w-full min-h-96 p-2 barchart`}
    />
  );
};

export default BarChart;
