import { Box, Divider, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Chart } from "react-google-charts";


export const data = [

  ["2004/05", 165, 938, 522, 998, 450, 614.6],
  ["2005/06", 135, 1120, 599, 1268, 288, 682],
  ["2006/07", 157, 1167, 587, 807, 397, 623],
  ["2007/08", 139, 1110, 615, 968, 215, 609.4],
  ["2023/01", 136, 691, 629, 1026, 366, 569.6],
];

export const options = {
  title: "Yearly Growth Chart",
  vAxis: { title: "Unit" },
  hAxis: { title: "Year" },
  seriesType: "bars",
  series: { 5: { type: "line" } },
  backgroundColor: 'transparent',
};

export const ComboChart = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const previousYear = currentYear - 1;
  const previousYear1 = currentYear - 2;
  const previousYear2 = currentYear - 3;
  const previousYear3 = currentYear - 4;
  data[data.length - 1][0] = `${currentMonth}/${currentYear}`;
  data[data.length - 2][0] = `${currentMonth}/${previousYear}`;

  const data2 = [
    [
      "year",
      "Return",
      "Demostic sales",
      "Export",
      "Profit",
      "trafic",
      "Average",
    ],
    [previousYear3, 165, 938, 522, 998, 450, 614.6],
    [previousYear2, 135, 1120, 599, 1268, 288, 682],
    [previousYear1, 157, 1167, 587, 807, 397, 623],
    [previousYear, 139, 1110, 615, 968, 215, 609.4],
    [currentYear, 136, 691, 629, 1026, 366, 569.6],
  ];

  return (
    <Box>
      <Chart
        chartType="ComboChart"
        width="100%"
        height="400px"
        data={data2}
        options={options}
      />

      <VStack pt={5} align={"center"} justify={"center"} ><Divider backgroundColor={"red"} w={"70%"} /></VStack>
      <Text align={"center"} p={2}  >Annual Report</Text>
    </Box>
  );
}