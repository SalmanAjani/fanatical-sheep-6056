import React from 'react'
import {AgeChart } from '../Charts/AgeChart'
import { GeoChart } from '../Charts/GeoChart'
import { GoogleCalender } from '../Charts/GoogleCalender'
import { AvgCustomer } from '../Charts/AvgCustomer'
import { CurrenTtrafic } from '../Charts/CurrenTtrafic'
import { ComboChart } from '../Charts/ComboChart'
import { Box, Divider, Flex,  Heading, SimpleGrid,} from '@chakra-ui/react'


export const Dashboard = () => {
  return (
   <Box>
     <Flex direction="column" minH="100vh" p={4}>
        <Flex  align="center" justify="center" >
          <Heading as="h1" size="lg">
            Admin Dashboard
          </Heading>
        </Flex>
        <Divider pt={3} my={4}/>
        <SimpleGrid columns={[1, 2, 2]} spacing={4}>
          <CurrenTtrafic/>
          <AvgCustomer/>
          <GoogleCalender/>
          <AgeChart/>
          <ComboChart/>
          <GeoChart/>
        </SimpleGrid>
    </Flex>
   </Box>
  )
}
