import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";


const Get_CX = () => {
    return [
      ["Age", "Weight"],
      ...Array.from({ length: 16 }, () => [
        Math.floor(Math.random() * 100) + 1,
        Math.floor(Math.random() * 100) + 1
      ]),
    ];
  }

export const options = {
    colors: ["green", "blue"],
    backgroundColor: '#1a202c',
    pointSize: 10,
    animation: {
      duration: 1000,
      easing: "out",
      startup: true,
    },
    vAxis: {
      viewWindow: {
        max: -10,
        min: 100,
      },
    },
    hAxis: {
      viewWindow: {
        max: 100,
        min: -10,
      },
    },
    legend: { position: "none" },
    enableInteractivity: false,
  };

export const  CurrenTtrafic=()=> {
    const [chartData, setChartData] = useState(Get_CX);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setChartData(Get_CX());
      }, 900);
  
      return () => {
        clearInterval(intervalId);
      };
    });
  
    return (
      <Chart
        chartType="ScatterChart"
        width="80%"
        height="400px"
        data={chartData}
        options={options}
      />
    );
  }