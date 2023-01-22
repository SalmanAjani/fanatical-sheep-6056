import { Box, Divider, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Chart } from "react-google-charts";
import { IndianCxData } from "../../../Utils/Indian.cx.data"

export const options = {
  backgroundColor: 'transparent',
  color: "white",
  legend: "none",
  pieSliceText: "label",
  slices: {
    4: { offset: 0.2 },
    12: { offset: 0.3 },
    14: { offset: 0.4 },
    15: { offset: 0.5 },
  },
};

export const AvgCustomer = () => {
  return (
    <Box>
      <Chart
        chartType="PieChart"
        data={IndianCxData}
        options={options}
        width={"100%"}
        height={"400px"}
      />
      <VStack align={"center"} justify={"center"} ><Divider backgroundColor={"red"} w={"70%"} /></VStack>
      <Text align={"center"} p={2}  >Your Indian Cutomer Base</Text>
    </Box>
  );
}
