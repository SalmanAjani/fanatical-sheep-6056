import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Stack,
  Button,
} from '@chakra-ui/react'
import { faQData } from "../../../Utils/faq.questions"
import { ChatIcon } from '@chakra-ui/icons'
import { HiPhoneMissedCall } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';


const Faq = () => {
  const navigate = useNavigate();
  const handelRedirect = () => {
    navigate("/admin/support")
  }
  return (
    <Box py={[3, 20]} px={[2, 5]} >
      <Text as="header" color={"red.400"} fontSize={["2xl", '4xl']} textAlign={"center"} >Frequently Asked Questions?</Text>
      <Text fontSize={["md", 'xl']} textAlign={"center"} pb={5} color={"green.300"} >Resolve your doubt, with Faq Section.</Text>
      <Accordion allowToggle>
        {faQData.map((elm, i) =>
          <AccordionItem key={i}>
            <h2>
              <AccordionButton _expanded={{ bg: 'red.600', color: 'white' }}>
                <Box as="b" flex='1' textAlign='left'>
                  {`Q ${i + 1}. ${elm.ques}`}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {elm.ans}
            </AccordionPanel>
          </AccordionItem>
        )}
      </Accordion>
      <Text fontSize={["xs", 'md']} p={5} textAlign={"center"} pb={5} color={"yellow.300"} >Still have a Doubt? </Text>
      <Stack align={"center"} justify={"center"} direction='row' spacing={4}>
        <Button onClick={handelRedirect} leftIcon={<ChatIcon />} colorScheme='teal' variant='solid'>
          Chat With us
        </Button>
        <Button onClick={() => handelRedirect()} rightIcon={<HiPhoneMissedCall />} colorScheme='teal' variant='solid'>
          Call us
        </Button>
      </Stack>

    </Box>
  )
}

export default Faq
