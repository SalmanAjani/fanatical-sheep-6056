import React from "react";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import {
  Box,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  Text,
  MenuList,
  Flex,
} from "@chakra-ui/react";

function UserMenu() {
  return (
    <Menu>
      <MenuButton  variantColor="pink" border="none" bg="none">
       
      </MenuButton>
      <MenuList  mr="20px" boxShadow =" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" p="0 40px" bg="white" zIndex={2}>
        <MenuGroup title="Profile" color="red">
          <Text>My Account</Text>
          <Text>Payments </Text>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Help">
          <Text>Docs</Text>
          <Text>FAQ</Text>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}

export default UserMenu;
