import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Image,
  InputGroup,
  Input,
  InputLeftElement,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,
  MenuButton,
  Drawer,
  DrawerContent,
  Menu,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import Weblogo from "../.././Assets/nimbleCart_logo_rect.jpg";
import { useCallback } from "react";
import { FiBell, FiChevronDown } from "react-icons/fi";
import { Sidebar } from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { GET_ADMIN_DATA } from "../../redux/app/admin/action";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [SearchInputText, setSearchInputText] = useState("");
  const PRODUCTS = useSelector((state) => state.Adminreducer.adminSearchData);
  const dispatch = useDispatch();
  useEffect(() => {
    if (PRODUCTS.length >= 0) {
      dispatch(GET_ADMIN_DATA());
    }
  }, []);
  const navigate = useNavigate();
  const handelQuery = (e) => {
    setSearchInputText(e.target.value);
  };
  const handelsetSearchInputText = useCallback((value) => {
    setSearchInputText(value);
  }, []);

  const handleLogOut = () => {};

  return (
    <>
      <Box
        zIndex={11000}
        position="fixed"
        p={0}
        top={0}
        left={0}
        w={"100%"}
        borderBottom={"1px solid red"}
        bg={useColorModeValue("gray.300", "gray.900")}
        px={10}
        as="header"
      >
        <Flex h={16} justify={"space-between"} align={"center"}>
          <HStack>
            {/* <IconButton size={'md'}  icon={isOpen ? "" : <HamburgerIcon />} */}
            {isOpen ? (
              <Image borderRadius={5} w={55} src={Weblogo} alt="Nimble Cart" />
            ) : (
              <IconButton
                size={"md"}
                icon={<HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
            )}

            {/* // aria-label={'Open Menu'} display={{ md: 'none' }}onClick={isOpen ? onClose : onOpen}/> */}
            <Image
              display={{ base: "none", md: "block" }}
              ml={[1330, 0, 1110]}
              w={50}
              src={Weblogo}
              alt="Nimble Cart"
            />
          </HStack>
          <HStack>
            <HStack spacing={{ base: "0", md: "6" }}>
              <InputGroup display={{ base: "none", md: "flex" }}>
                <Input
                  focusBorderColor="#d0234f"
                  display={{ base: "none", md: "flex" }}
                  color={"whiteAlpha.900"}
                  value={SearchInputText}
                  onChange={handelQuery}
                  type="text"
                  htmlSize={16}
                  w={"auto"}
                  placeholder="Search"
                />
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon />}
                />
              </InputGroup>
              <IconButton
                _focus={{ color: "#d0234f" }}
                size="lg"
                variant="ghost"
                aria-label="open menu"
                icon={<FiBell />}
              />
              <Flex alignItems={"center"}>
                <Menu>
                  <MenuButton
                    py={2}
                    transition="all 0.3s"
                    _focus={{ boxShadow: "none" }}
                  >
                    <HStack>
                      <Avatar
                        size={"sm"}
                        src={
                          "https://media.licdn.com/dms/image/C4D03AQGG0QJOuu9Lng/profile-displayphoto-shrink_400_400/0/1640068567052?e=1679529600&v=beta&t=M0by6EW4ocD8QnEk_m78qXG1N-WxTYc2jBgNP1RhC60"
                        }
                      />
                      <Box display={{ base: "none", md: "flex" }}>
                        <FiChevronDown />
                      </Box>
                    </HStack>
                  </MenuButton>
                  <MenuList
                    bg={useColorModeValue("white", "gray.900")}
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                  >
                    <MenuItem>Profile</MenuItem>
                    <MenuDivider />
                    <MenuItem>Sign out</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </HStack>
          </HStack>
        </Flex>
      </Box>
      <Sidebar
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
