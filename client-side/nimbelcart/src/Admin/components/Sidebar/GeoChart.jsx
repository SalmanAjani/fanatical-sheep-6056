import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Active Customer",],
  ["Germany", 2000],
  ["United States", 23000],
  ["Brazil", 14000],
  ["Canada", 15000],
  ["France", 16000],
  ["RU", 7000],
  ["IN",28000],
  ["AU",11900],
  ["BD",9850],
  ["BZ",4003],
  ["NL",6731],
  ["NZ",3897],
  ["QA",17853],
  ["CH",4567],

];

export const GeoChart=()=> {
    const options = {
        backgroundColor: "#1a202c"
      };
  return (
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
  );
}
