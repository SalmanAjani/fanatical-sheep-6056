import React from "react";
import {
  Box,
  Flex,
  Grid,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function ShopMenu() {
  return (
    <Box>
      <Menu >
        <MenuButton border="none" bg="none">
          <Flex
            align={"center"}
            gap="10px"
            p="0.4em 2rem"
            ml="1em"
            border="1px solid #d6d6d6"
            borderRadius={"2px"}
            w={{ base: "fit-content" }}
          >
            <span>
              <RxHamburgerMenu color="tomato" />
            </span>
            <Box fontWeight={"bold"} fontSize={[8, 10, 13]}>
              Shop by Cateogry
            </Box>
          </Flex>
        </MenuButton>
        <MenuList
          ml="2em"
          boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          p="20px"
          bg="#fff"
          zIndex={999}
        >
          <MenuItem bg="#fff" zIndex={999}>
          <Grid gap="100px" templateColumns={"1fr 5fr"}>
            <Box borderRight={"1px solid #d6d6d6"} pr="100px">
              <Text color="tomato">Apparels</Text>
            </Box>
            <Flex w="50vw" direction={"column"} align="start" gap="10px">
              <Box>
                <Link to="/products">Fashion</Link>
              </Box>
              <Box>
                <Link to="/menproduct">Men's</Link>
              </Box>
              <Box>
                <Link to="/womenproduct">Women's</Link>
              </Box>
              <Box>
                <Link to="/kidproduct">Kids</Link>
              </Box>
            </Flex>
          </Grid>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default ShopMenu;
