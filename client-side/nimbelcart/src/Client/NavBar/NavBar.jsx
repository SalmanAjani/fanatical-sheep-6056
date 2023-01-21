import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  InputRightElement,
  Input,
  InputGroup,
} from "@chakra-ui/react";

import { FiSearch } from "react-icons/fi";
import { RiAdminFill } from "react-icons/ri";
import {
  BsFillEmojiSunglassesFill,
  BsHandbag,
  BsFileText,
} from "react-icons/bs";
import logo from "../../Assets/nimbleCart_logo_rect.jpg";
import ShopMenu from "./ShopMenu";
import { Link } from "react-router-dom";


function Navbar() {

  

  return (
    <Box position="fixed" top="0" right='0'left='0' bg="#fff">
      {/* ?logo */}
      <Flex justify={"center"} align={"center"} mt="1em">
        <Box w={{ base: "60px", sm: "80px", md: "100px", lg: "150px" }}>
         <Link to="/"> <Image src={logo} alt="logo" w={"100%"} /></Link>
        </Box>
      </Flex>

      {/* Navbar */}
      <Flex
        h="50px"
        w="100%"
        mx="auto"
        alignItems={"center"}
        fontSize={"0.9rem"}
        mt="0.4em"
        className="Navbar_home"
      >
        {/* shop menu opens here */}
        <ShopMenu />

        {/* menus */}
        <Flex w="60%" borderRadius={"2px"}>
          <InputGroup>
            <Input
              placeholder="Search"
              variant="unstyled"
              border="1px solid #d6d6d6"
              p="0.4em 0.5em"
              ml="1em"
              w="100%"
              fontSize={"0.9rem"}
            />
            <InputRightElement
              children={<FiSearch color="tomato" />}
              pr="0.5em"
            />
          </InputGroup>
        </Flex>

        {/* cart-login */}
        <Flex
          justify={"space-between"}
          gap="1em"
          ml="1em"
          display={{ base: "none", sm: "flex" }}
        >
          <Flex align={"center"} alignItems="center" gap="5px" display="none">
            <RiAdminFill color="tomato" />
          </Flex>

          <Flex align={"center"} alignItems="center" gap="5px">
            <BsFileText color="tomato" h={[100, 200, 300]} />
            <Box mt="3px" fontSize={[10, 14]}>
              <Link to="/order">My Orders</Link>
            </Box>
          </Flex>

          <Flex align={"center"} alignItems="center" gap="5px">
            <BsHandbag color="tomato" h={[100, 200, 300]} />
            <Box mt="3px" fontSize={[10, 14]}>
              {" "}
              <Link to="/cart">No Items in the bag</Link>
            </Box>
          </Flex>

          <Flex align={"center"} alignItems="center" gap="5px">
            <BsFillEmojiSunglassesFill color="tomato" h={[100, 200, 300]} />
            <Box mt="3px" fontSize={[10, 14]}>
              <Link to="/signup">Sign up</Link>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
