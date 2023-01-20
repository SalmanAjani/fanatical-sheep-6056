import { Box, Divider, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Active Customer",],
  ["Germany", 2000],
  ["United States", 23000],
  ["Brazil", 14000],
  ["Canada", 15000],
  ["France", 16000],
  ["RUSSIA", 7000],
  ["INDIA",28000],
  ["AUSTRAILA",11900],
  ["BANGLADESH",9850],
  ["BRAZIL",4003],
  ["NETHERLAND",6731],
  ["NEW ZLAND",3897],
  ["QUATER",17853],
  ["SINGAPOR",4567],

];

export const GeoChart=()=> {
    const options = {
        backgroundColor: "transparent"
      };
  return (
    <Box>
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    <VStack pt={5} align={"center"} justify={"center"} ><Divider backgroundColor={"red"} w={"70%"}/></VStack>
    <Text  align={"center"} p={2}  >World Map Consumer Report</Text>
      </Box>
  );
}
