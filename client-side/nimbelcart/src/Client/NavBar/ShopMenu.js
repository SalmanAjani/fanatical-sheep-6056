import React from "react";
import {
  Box,
  Flex,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

function ShopMenu() {
  return (
    <Box>
      <Menu>
        <MenuButton border="none" bg="none">
          <Flex
            align={"center"}
            gap="10px"
            p="0.4em 2rem"
            ml="1em"
            border="1px solid #d6d6d6"
            w="fit-content"
            borderRadius={"2px"}
          >
            <span>
              <RxHamburgerMenu color="tomato" />
            </span>
            <Box fontWeight={"bold"}>Shop by Cateogry</Box>
          </Flex>
        </MenuButton>
        <MenuList ml="60px" boxShadow =" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" p="20px" bg="white" zIndex={2}>
          <Grid gap="100px" templateColumns={"1fr 5fr"}>
            <Box borderRight={"1px solid #d6d6d6"} pr="100px">
              <Text color="tomato">Gift Cards</Text>
            </Box>
            <Flex  w="50vw" direction={'column'} align='start' gap="10px">
              <Box >Fashion</Box>
              <Box>Grocery & Home Decor</Box>
              <Box>Jewelery</Box>
              <Box>Furniture & Electronics</Box>
              <Box>Entertainment</Box>
              <Box>Beauty & Health</Box>
              <Box>Travel & Holidays</Box>
            </Flex>
          </Grid>{" "}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default ShopMenu;
