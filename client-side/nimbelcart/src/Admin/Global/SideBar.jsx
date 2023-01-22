import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, CloseButton, Divider, Flex, useColorMode, useColorModeValue, Icon, Text, VStack } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { SideBarItems } from "../../Utils/SiderLink";
export const Sidebar = ({ isopen, onClose, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex overflow={"auto"} isopen={isopen} onClose={onClose} mt={16}>
      <Box isopen={isopen} onClose={onClose} zIndex={[0, 1002, 1002]}
        transition="3s ease" bg={useColorModeValue('gray.200', 'gray.900')} borderRight="1px"
        borderRightColor={useColorModeValue('gray.600', 'red.700')} w={{ base: 'full', md: 60 }} pos="fixed" h="full" {...rest}>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text textAlign={"center"} fontSize={"5xl"} >Admin</Text>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        <Divider bg={useColorModeValue('black', 'white')} orientation='horizontal' mt={"-1.5px"} mb={2} />
        {SideBarItems.map((link) => (
          <VStack key={link.name} align={"flex-start"} pl={7} py={1}>
            <NavLink style={({ isActive }) => isActive ? { color: 'white', background: '#28c58f', borderRadius: "7px" } : { color: 'white', background: 'transparent', borderRadius: "7px" }
            } key={link.name} to={link.to}>
              <Button w={200} justifyContent="flex-start" _hover={{ bg: "tomato", color: "white" }}
                _focus={{ bg: "tomato", color: "white" }} variant={"ghost"} leftIcon={<link.icon />} >{link.name}</Button>
            </NavLink>
          </VStack>
        ))}
        <Flex pt={2} align={"center"} justify={"center"}>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};










