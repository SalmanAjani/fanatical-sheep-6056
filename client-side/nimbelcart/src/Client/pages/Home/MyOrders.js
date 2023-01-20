import { Box, Flex, Text, Image, Heading, Button } from "@chakra-ui/react";
import React from "react";

function MyOrders() {
  return (
    <Box>
      <Heading align="left" p="10px" fontSize={[16,23,30]}>
        My Orders
      </Heading>

      {/* for each order if more orders map the data */}
      <Box
        boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        p="10px"
        w="95%"
        m="auto"
        mt="1em"
        >
        <Flex
          justify="space-between"
          borderBottom={"0.3px solid #eceeee"}
          
          fontSize={"0.7rem"}
      
        >
          <Box >
            <Heading fontSize={[12,16,25]}>Order No. 56723423432</Heading>
            <Text>Date and time</Text>
          </Box>
          <Heading fontSize={[12,16,25]}>Order Total ₹599</Heading>
        </Flex>

        {/* second box order details */}
        <Flex justify="space-between" mt="1em" direction={{base:'column',md:'row'}} gap="10px" px="1em">
          <Flex gap="2rem">
            <Box w={{base:"20%",md:"10%"}}>
              <Image
                w="100%"
                src="https://catalog.paytm.com/images/670749/131709010.jpg"
                alt="image"
              />
            </Box>
            <Box>
              <Heading fontSize={[12,16,20]}>Status of the order/delivered/intransit/etc</Heading>
              <Text>Title/product name</Text>
              <Text>₹599/Piece</Text>
            </Box>
          </Flex>

          {/* Product Rating and details */}
          <Box>
            <Button borderRadius={'5px'}variant="outline" color="tomato" p="10px" borderColor={'tomato'} bg='none'>
              View details
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box
        boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        p="10px"
        w="95%"
        m="auto"
        mt="1em"
        >
        <Flex
          justify="space-between"
          borderBottom={"0.3px solid #eceeee"}
          
          fontSize={"0.7rem"}
      
        >
          <Box >
            <Heading fontSize={[12,16,25]}>Order No. 56723423432</Heading>
            <Text>Date and time</Text>
          </Box>
          <Heading fontSize={[12,16,25]}>Order Total ₹599</Heading>
        </Flex>

        {/* second box order details */}
        <Flex justify="space-between" mt="1em" direction={{base:'column',md:'row'}} gap="10px" px="1em">
          <Flex gap="2rem">
            <Box w={{base:"20%",md:"10%"}}>
              <Image
                w="100%"
                src="https://catalog.paytm.com/images/670749/131709010.jpg"
                alt="image"
              />
            </Box>
            <Box>
              <Heading fontSize={[12,16,20]}>Status of the order/delivered/intransit/etc</Heading>
              <Text>Title/product name</Text>
              <Text>₹599/Piece</Text>
            </Box>
          </Flex>

          {/* Product Rating and details */}
          <Box>
            <Button borderRadius={'5px'}variant="outline" color="tomato" p="10px" borderColor={'tomato'} bg='none'>
              View details
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box
        boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        p="10px"
        w="95%"
        m="auto"
        mt="1em"
        >
        <Flex
          justify="space-between"
          borderBottom={"0.3px solid #eceeee"}
          
          fontSize={"0.7rem"}
      
        >
          <Box >
            <Heading fontSize={[12,16,25]}>Order No. 56723423432</Heading>
            <Text>Date and time</Text>
          </Box>
          <Heading fontSize={[12,16,25]}>Order Total ₹599</Heading>
        </Flex>

        {/* second box order details */}
        <Flex justify="space-between" mt="1em" direction={{base:'column',md:'row'}} gap="10px" px="1em">
          <Flex gap="2rem">
            <Box w={{base:"20%",md:"10%"}}>
              <Image
                w="100%"
                src="https://catalog.paytm.com/images/670749/131709010.jpg"
                alt="image"
              />
            </Box>
            <Box>
              <Heading fontSize={[12,16,20]}>Status of the order/delivered/intransit/etc</Heading>
              <Text>Title/product name</Text>
              <Text>₹599/Piece</Text>
            </Box>
          </Flex>

          {/* Product Rating and details */}
          <Box>
            <Button borderRadius={'5px'}variant="outline" color="tomato" p="10px" borderColor={'tomato'} bg='none'>
              View details
            </Button>
          </Box>
        </Flex>
      </Box>
      
    </Box>
  );
}

export default MyOrders;
