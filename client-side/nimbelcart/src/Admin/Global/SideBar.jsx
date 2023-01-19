import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, CloseButton, Divider, Flex,  useColorMode, useColorModeValue ,Icon, Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SideBarItems } from "../../Utils/SiderLink";
export const Sidebar = ({isopen,onClose, ...rest }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Flex  isopen={isopen} onClose={onClose}  mt={16}>
      <Box isopen={isopen} onClose={onClose} zIndex={[0,1002,1002]}
        transition="3s ease" bg={useColorModeValue('gray.200', 'gray.900')} borderRight="1px"
        borderRightColor={useColorModeValue('gray.600', 'red.700')} w={{ base: 'full', md: 60 }} pos="fixed" h="full" {...rest}>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text textAlign={"center"} fontSize={"5xl"} >Admin</Text>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        <Divider bg={useColorModeValue('black', 'white')}  orientation='horizontal' mt={"-1.5px"} mb={2}/>
        {SideBarItems.map((link) => (
          <NavItem key={link.name}  icon={link.icon} >
            {link.name}
            
          </NavItem>
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

  const NavItem = ({ icon, children, ...rest }) => {
    return (
      <Link to="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "#d0234f",
            color: 'white',
          }}
          _focus={{
            
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    );
  };
  