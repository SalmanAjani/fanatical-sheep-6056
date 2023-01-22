import { Box, Divider, Text, VStack } from "@chakra-ui/react";
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
  backgroundColor: 'transparent',
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

export const CurrenTtrafic = () => {
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
    <Box>
      <Chart
        chartType="ScatterChart"
        width="100%"
        height="400px"
        data={chartData}
        options={options}
      />
      <VStack align={"center"} justify={"center"} ><Divider backgroundColor={"red"} w={"70%"} /></VStack>
      <Text align={"center"} p={2}  >Curent Trafic Watching Your Product</Text>
    </Box>
  );
}