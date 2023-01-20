import React from 'react'
import AdminNavbar from '../Global/AdminNavbar'
import { Box } from '@chakra-ui/react'
import { CurrenTtrafic } from '../components/Charts/CurrenTtrafic'
export const LineChartPage = () => {
  return (
    <div>
         <AdminNavbar/>
    <Box pl={[0,240,240]}>
        <CurrenTtrafic/>
    </Box>
    </div>
  )
}
