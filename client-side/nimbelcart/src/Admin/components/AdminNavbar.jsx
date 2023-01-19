import {IconButton,Avatar, Box,CloseButton,Flex,HStack,Icon,useColorModeValue,Drawer, DrawerContent,useDisclosure, Menu,
  MenuButton,MenuDivider,MenuItem,MenuList,Image, Button, useColorMode, Divider, InputGroup, InputLeftElement, Input} from '@chakra-ui/react';
import {FiStar, FiMenu,FiBell,FiChevronDown} from 'react-icons/fi';
import LOGO from "../../Assets/nimbleCart_logo_rect.jpg"
import { MdSpaceDashboard } from 'react-icons/md';
import { BiAddToQueue,BiLineChart ,BiSupport} from 'react-icons/bi';
import { AiFillDatabase,AiOutlineBarChart} from 'react-icons/ai'
import { TiChartPie} from 'react-icons/ti'
import { MdVideoSettings} from 'react-icons/md'
import { FcMindMap,FcFaq} from 'react-icons/fc'
import { SiGooglecalendar } from "react-icons/si"
import { MoonIcon, SearchIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useCallback, useState } from 'react';
import { Dashboard } from './Sidebar/Dashboard';
import Mangeproducts from './Sidebar/Mangeproducts';
import MapChart from './Sidebar/MapChart';
const LinkItems = [
  { name: 'Dashboard', icon: MdSpaceDashboard },
  { name: 'Add Product', icon:BiAddToQueue },
  { name: 'Manage Products', icon: AiFillDatabase },
  { name: 'Favourites', icon: FiStar },
  { name: 'Clanders', icon: SiGooglecalendar },
  {name: 'Pie Chart', icon: TiChartPie},
  {name: 'Bar Chart', icon: AiOutlineBarChart},
  {name: 'Line Chart', icon: BiLineChart},
  {name: 'Geography Chart', icon: FcMindMap},
  {name: 'Admin Support', icon:BiSupport},
  {name: 'FAQ', icon: FcFaq},
  {name:"Tutorial",icon:MdVideoSettings}
];


export const  AdminNavbar=( {children})=> {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer autoFocus={false} isOpen={isOpen} placement="left"  onClose={onClose} 
       onOverlayClick={onClose}size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
     
     {/* =============================================NAVBAR FOR MOBILE==================================================== */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex>
    <Box
      transition="3s ease" bg={useColorModeValue('gray.200', 'gray.900')} borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'red.700')} w={{ base: 'full', md: 60 }} pos="fixed" h="full" {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Link to="/"><Image w={{ base: "50px", md: "100px" }} borderRadius={5} mb={"-3px"} src={LOGO} alt="Nimble Cart"/></Link>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Divider bg={useColorModeValue('black', '#d0234f')}  orientation='horizontal' mt={"-1.5px"} mb={2}/>
      {LinkItems.map((link) => (
        <NavItem key={link.name}  icon={link.icon}>
          {link.name}
          
        </NavItem>
      ))}
      <Flex pt={2} align={"center"} justify={"center"}>
       <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />} 
                   </Button>
                   </Flex>
                   <Button><MapChart/>gg</Button>
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


const MobileNav = ({ onOpen, ...rest }) => {
  const [ SearchInputText,setSearchInputText]=useState("");
const handelQuery = (e) => {
  setSearchInputText(e.target.value)
}
const handelsetSearchInputText= useCallback((value)=>{
  setSearchInputText(value) ;
},[])
  return (
    <>
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('gray.300', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.400', 'red.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Link to="/"><Image ml={7} w={{ base: "65px", md: 'none' }} display={{ base: 'flex', md: 'none' }} borderRadius={5} src={LOGO} alt="Nimble Cart"/></Link>
      <HStack spacing={{ base: '0', md: '6' }}>
      
                   <InputGroup display={{ base: 'none', md: 'flex' }}  >
                      <Input  focusBorderColor='#d0234f'  display={{ base: 'none', md: 'flex' }}  color={"whiteAlpha.900"} value={ SearchInputText}  onChange={handelQuery}  
                             type='text' htmlSize={16} w={"auto"} placeholder='Search' />
                             <InputLeftElement pointerEvents='none'  children={<SearchIcon/>} /> 
                  </InputGroup> 
        <IconButton
        _focus={{color:"#d0234f"}}
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    "https://media.licdn.com/dms/image/C4D03AQGG0QJOuu9Lng/profile-displayphoto-shrink_400_400/0/1640068567052?e=1679529600&v=beta&t=M0by6EW4ocD8QnEk_m78qXG1N-WxTYc2jBgNP1RhC60"
                  }
                />
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
    <Box border={"3px solid red"}mt={5} ml={[0,0,240]}>
      <Dashboard/>
      <br/><br/>
      <Mangeproducts/>
      <SearchBar query={SearchInputText} setQuary={handelsetSearchInputText} />
      </Box></>
  );
};