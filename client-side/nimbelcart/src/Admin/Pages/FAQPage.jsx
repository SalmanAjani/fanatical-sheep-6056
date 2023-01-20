import React from 'react'
import AdminNavbar from '../Global/AdminNavbar'
import { Box } from '@chakra-ui/layout'
import Faq from '../components/Sidebar/Faq'
import { Stats } from '../components/Sidebar/Stats'
import { GeoChart } from '../components/Sidebar/GeoChart'
import { CurrenTtrafic } from '../components/Sidebar/CurrenTtrafic'
import { ComboChart } from '../components/Sidebar/ComboChart'
import { AvgCustomer } from '../components/Sidebar/AvgCustomer'
import { GoogleCalender } from '../components/Sidebar/GoogleCalender'
const FAQPage = () => {
  return (
    <div><AdminNavbar/>
    <Box pl={[0,240,240]}>
      <Faq/>
      <Stats/>
      <GeoChart/>
      <CurrenTtrafic/>
      <ComboChart/>
      <AvgCustomer/>
      <GoogleCalender/>
    </Box>
    </div>
  )
}

export default FAQPage