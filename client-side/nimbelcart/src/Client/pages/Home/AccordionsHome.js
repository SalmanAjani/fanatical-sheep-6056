import React from 'react'
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel ,Box,Text} from '@chakra-ui/react'

import {VscStarFull } from 'react-icons/vsc'


function AccordionsHome({item}) {

  return (
    <AccordionItem w="96%" m='auto' mt="1em">

    <h2>
        <AccordionButton h="40px" bg="#fff" border="none">
            <Box 
                as="span" 
                flex='3'
                display='flex' 
                flexDirection="row" 
                alignItems="center" 
                textAlign='left' >
                     
                     <VscStarFull/>  
                     
                     <Text 
                        pl="15px"
                        fontWeight={'500'}
                        fontSize={[10,12,15]}
                       >{item.heading}  
                    </Text>  
             </Box>

            <AccordionIcon />

        </AccordionButton>
    </h2>

    <AccordionPanel 
        pb={3}  
        pl="50px"
        bg='#E8F9FD'
        textAlign="left" 
        lineHeight={"2em"}
        fontSize={[10.12,15]}
        w="100%">
       {item.content}
        <br />
        <br />
        
    </AccordionPanel>

</AccordionItem>
  )
}

export default AccordionsHome;