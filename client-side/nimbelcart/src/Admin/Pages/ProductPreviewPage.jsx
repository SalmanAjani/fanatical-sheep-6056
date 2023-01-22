import React from 'react'
import AdminNavbar from '../Global/AdminNavbar'
import { Box } from '@chakra-ui/layout'
import { ProductPreview } from '../components/ProductPreview'

export const ProductPreviewPage = () => {
  return (
    <div>
      <AdminNavbar />
      <Box pl={[0, 240, 240]}>
        <ProductPreview />
      </Box>
    </div>
  )
}
