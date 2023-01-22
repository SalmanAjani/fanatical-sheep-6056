import React from 'react'
import AdminNavbar from '../Global/AdminNavbar'
import { Box } from '@chakra-ui/react'
import { GoogleCalender } from '../components/Charts/GoogleCalender'
export const CalenderPage = () => {
  return (
    <div>
            <AdminNavbar/>
    <Box pl={[0,240,260]} pt={[0,0,100]}>
   <GoogleCalender/>
    </Box>
    </div>
  )
}
