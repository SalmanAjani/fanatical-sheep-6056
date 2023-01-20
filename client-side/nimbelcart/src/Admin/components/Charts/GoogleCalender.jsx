import { Box, Divider, Text, VStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export const GoogleCalender = () => {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState({
    title: "Red Sox Attendance",
  });

  useEffect(() => {
    const currentDate = new Date();
    const threeMonthsAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() - 3);

    const formattedData = [[ { type: "date", id: "Date" },
     { type: "number", id: "Won/Loss" }, 
    { role: 'style' },],
    ];

    // Example data
    const allData = [      [new Date(2013, 2, 4), 10],
      [new Date(2013, 2, 5), 3],
      [new Date(2013, 2, 7), -1],
      [new Date(2013, 2, 8), 2],
      [new Date(2013, 2, 12), -1],
      [new Date(2013, 2, 13), 1],
      [new Date(2013, 2, 15), 1],
      [new Date(2013, 2, 16), -4],
      [new Date(2013, 1, 4), 10],
      [new Date(2013, 1, 5), 3],
      [new Date(2013, 1, 7), -1],
      [new Date(2013, 1, 8), 2],
      [new Date(2013, 1, 12), -1],
      [new Date(2013, 1, 13), 1],
      [new Date(2013, 1, 15), 1],
      [new Date(2013, 1, 16), -4],
    ];

    allData.forEach((dataPoint) => {
      if (dataPoint[0] >= threeMonthsAgo) {
        const formattedDataPoint = [...dataPoint];
        if(dataPoint[1]>0) formattedDataPoint.push('green');
        else formattedDataPoint.push('red');
        formattedData.push(formattedDataPoint);
      }
    });

    setData(formattedData);
    setOptions({ title: "Day Sales Report" });
  }, []);

  return (
    <Box>
    <Chart
      chartType="Calendar"
      width="90%"
      height="400px"
      data={data}
      options={options}
    />
   
    </Box>

    
  );
};
