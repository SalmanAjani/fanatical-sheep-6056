import React, { useState } from 'react'
import { Pie } from 'nivo';
import { Box } from '@chakra-ui/react';

export const PieChart = () => {
  const [data, setData] = useState([
    {
      id: 'A',
      value: 20,
      color: '#FF8042',
    },
    {
      id: 'B',
      value: 30,
      color: '#00A8CC',
    },
  ])

  return (
    <Box>
    <Pie
      data={data}
      width={500}
      height={500}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={{ scheme: 'nivo' }}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      radialLabelsSkipAngle={10}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#333333"
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={16}
      radialLabelsLinkHorizontalLength={24}
      radialLabelsLinkStrokeWidth={1}
      radialLabelsLinkColor={{ from: 'color' }}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#333333"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  </Box>

  )
}
