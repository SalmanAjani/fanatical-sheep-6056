import React from 'react'
import AdminNavbar from '../Global/AdminNavbar'
import { Box } from '@chakra-ui/react'
import { Tutorial } from '../components/Sidebar/Tutorial'
export const Tutorialpage = () => {
  return (
    <div>
            <AdminNavbar/>
    <Box pl={[0,240,240]}>
        <Tutorial/>
    </Box>
    </div>
  )
}
