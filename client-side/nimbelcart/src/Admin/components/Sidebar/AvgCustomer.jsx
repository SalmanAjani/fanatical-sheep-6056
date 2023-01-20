import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["States", "Customers (in Thousands)"],
  ["Andhra Pradesh", 13],
  ["Arunachal Pradesh", 83],
  ["Assam", 1.4],
  ["Chhattisgarh", 2.3],
  ["Goa", 46],
  ["Gujarat", 300],
  ["haryana", 38],
  ["Himachal Pradesh", 5.5],
  ["JharKhand", 5],
  ["Karnataka", 20],
  ["Kerala", 33],
  ["Mashya Pradesh", 1.5],
  ["Meghalaya", 72],
  ["Mizoram", 2.9],
  ["Nagaland", 33],
  ["Odisha", 29],
  ["Panjab", 0.01],
  ["Rajasthan", 6.5],
  ["Sikkim", 2.5],
  ["Tamil Nadu", 61],
  ["Telangana", 74],
  ["Uttarakhand", 52],
  ["Uttar Pradesh", 472],
  ["WestBengal", 452],
  ["Andaman and Nicobar Islands", 2],
  ["Jammu & Kashmir", 35],
  ["Puducherry", 15],
];

export const options = {
  title: "Your Indian Cutomer Base",
  backgroundColor: 'transparent',
  legend: "none",
  pieSliceText: "label",
  slices: {
    4: { offset: 0.2 },
    12: { offset: 0.3 },
    14: { offset: 0.4 },
    15: { offset: 0.5 },
  },
};

export const AvgCustomer =()=> {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
