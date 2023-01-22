import React from "react";
import { Chart } from "react-google-charts";
import { IndianCxData } from "../../../Utils/Indian.cx.data"
import { Stack } from "@chakra-ui/react";
export const AgeChart = () => {
  return (
    <Stack >
      <Chart
        width={"100%"}
        height={"100%"}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={IndianCxData}
        rootProps={{ "data-testid": "6" }}
        chartPackages={["corechart", "controls"]}
        render={({ renderControl, renderChart }) => {
          return (
            <div style={{ display: "flex" }}>
              <div style={{ width: "40%" }}>{renderControl(() => true)}</div>
              <div style={{ width: "60%" }}>{renderChart()}</div>
            </div>
          );
        }}
        controls={[
          {
            controlType: "StringFilter",
            options: {
              filterColumnIndex: 0,
              matchType: "any", // 'prefix' | 'exact',
              ui: {
                label: "Search by state",
              },
            },
          },
          {
            controlType: "NumberRangeFilter",
            controlID: "age-filter",
            options: {
              filterColumnIndex: 1,
              ui: {
                labelStacking: "vertical",
                label: "Avarage Age of buyers:",
                allowTyping: false,
                allowMultiple: false,
              },
            },
          },
        ]}
      />
    </Stack>
  );
}