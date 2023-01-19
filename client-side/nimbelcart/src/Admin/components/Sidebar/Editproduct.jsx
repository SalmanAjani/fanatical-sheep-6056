import React,{ useEffect,  useState }  from 'react'
import {Flex,Box,FormControl,FormLabel,Input,Stack,Button, Heading, Text, useColorModeValue, Container, Image, SimpleGrid, VStack, HStack,} from '@chakra-ui/react';
import { useDispatch, useSelector,  } from 'react-redux';

import { useNavigate, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { EDIT_ADMIN_DATA } from '../../../redux/app/admin/action';
export const Editproduct =()=> {
  const Priviousdata = "Privious data will Remain same if  fild gonna be Empty."
    const[name,setname]=useState("");
    const[desc,setDesc]=useState("");
    const [image, setImage]= useState("")
    const [price, setnewPrice]= useState("")
    const [stock, setstock]= useState("")
    const[previousdata,setPreviousData]=useState({});
    const {id} =useParams();
    const PRODUCTS= useSelector((state)=> state.AppReducer.products)
    const dispatch = useDispatch();
    const formclear =()=>{
    navigate("/admin/dashboard")
    }

    const navigate =useNavigate();
    const handelUpdate =()=>{
      const payload={
      }
      if(name !== ""){
          payload.name = name 
      }
      if(desc
        !== ""){
        payload.desc = desc
      }
      if(image !== ""){
        payload.image = image
      }
      if(price !== ""){
        payload.newPrice= stock
      }
      if(stock !== ""){
        payload.stock =  stock
      } 
        dispatch(EDIT_ADMIN_DATA(id,payload))
        .then(()=>{

        });
       
        navigate("/admin")
    
    }
    useEffect(()=>{
      if(id){
          const previousId = PRODUCTS.find(PRODUCTS=> PRODUCTS.id === Number(id))
            setPreviousData(previousId)
          
      }},[])
  return (
    <SimpleGrid  mt={20} columns={[1,3,3]}>

<HStack  justify={"center"} align={"center"}>
  <VStack>
  <Text  color={"red.500"} as={"b"} textAlign={"center"} fontSize={"2xl"} >Privous Data</Text>
  <>
   
        <VStack  bg={"whiteAlpha.800"} h={520} color={"blackAlpha.900"} px={10} alignItems={"center"} justifyContent={"center"} boxShadow='md' borderRadius={5}>
                    <>
                          <Image borderRadius={"5px"} border={"2px solid RGBA(0, 0, 0, 80)"} m={0} width={300} height={169} boxShadow={"xl"} src={previousdata.image} alt={previousdata.name}/>
                          <VStack>
                          <FormControl > <FormLabel color={"black"} as="b" >Previous Title</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"30px"} overflow={"auto"}>
                              <Text  px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {previousdata.name}</Text></Box></FormControl>
                              <VStack>
                          <FormControl> <FormLabel color={"black"} as="b">Previous Description</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"50px"} overflow={"auto"}>
                              <Text  px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"} > {previousdata.desc}</Text></Box></FormControl>
                              <Text color={"red.500"} as={"i"} fontSize={"2xs"}>Scroll down to read Description</Text>
                            </VStack>
                            <FormControl> <FormLabel color={"black"} as="b">old Price</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"30px"} overflow={"auto"}>
                         <Text px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {previousdata.price}</Text></Box></FormControl>
                         <FormControl> <FormLabel color={"black"} as="b">Old stock</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"30px"} overflow={"auto"}>
                         <Text px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {previousdata.stock}</Text></Box></FormControl>
                          </VStack>
                       </> 
                       </VStack></>
                        </VStack> 
                        </HStack>



              <HStack  justify={"center"} align={"center"}>
                <VStack>
              <Text  color={"blue.500"} as={"b"} textAlign={"center"} fontSize={"2xl"} zIndex={5}>New Data</Text>
              <VStack  bg={"whiteAlpha.800"} h={520} color={"blackAlpha.900"} px={10} alignItems={"center"} justifyContent={"center"} boxShadow='md' borderRadius={5}>
              <>
                    <Image  borderRadius={"5px"} border={"2px solid RGBA(0, 0, 0, 80)"} m={0} width={300} height={169} boxShadow={"xl"}  src={image} alt={name}/>
                    <VStack>
                    <FormControl > <FormLabel color={"black"} as="b" >New Title</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"30px"} overflow={"auto"}>
                         <Text  px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {name?`${name}`:`${Priviousdata}`}</Text></Box></FormControl>
                        <VStack>
                     <FormControl> <FormLabel color={"black"} as="b">New Description</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"50px"} overflowX={"auto"}>
                         <Text  px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {desc?`${desc}`:`${Priviousdata}`}</Text></Box></FormControl>
                     {desc===""?"":  <Text  mt={-20} p={0} as={"b"} textAlign={"center"} color={"red.500"} fontSize={"2xs"}>Scroll Down</Text>}
                       </VStack>
                       <FormControl> <FormLabel color={"black"} as="b">Old price</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"30px"} overflow={"auto"}>
                         <Text px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {price?`${price}`:`${Priviousdata}`}</Text></Box></FormControl>
                         <FormControl> <FormLabel color={"black"} as="b">New price</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"30px"} overflow={"auto"}>
                         <Text px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {stock?`${stock}`:`${Priviousdata}`}</Text></Box></FormControl>
                    </VStack>
              </>
                  </VStack>
                  </VStack>
                  </HStack>

    <Stack justifyContent={"center"} alignItems={"center"} spacing={4} >
    <Container p={0} m={0} border={0}>
    <Flex 
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      p={0} m={0}
   >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} >
        <Stack align={'center'}>
          <Heading color={"teal.400"} fontSize={'2xl'} textAlign={'center'}>
            Update here
          </Heading>
          <Text color={"teal.400"} fontSize={'lg'} >
          Update single & Multiple item here
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack >
          <form>
            <FormControl id="Title" >
                  <FormLabel>New Title</FormLabel>
                  <Input type="text" value={name} onChange={(e)=>setname(e.target.value)}  />
                </FormControl>
            <FormControl id="Image" >
              <FormLabel>New Image Url</FormLabel>
              <Input type="Text" value={image} onChange={(e)=>setImage(e.target.value)}  />
            </FormControl>
            <FormControl id="Description" >
                  <FormLabel>New Description</FormLabel>
                  <Input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}   />
                </FormControl>
            <FormControl id="Time" >
              <FormLabel>New Price</FormLabel>
              <Input type="number" value={price} onChange={(e)=>setnewPrice(e.target.value)} />
            </FormControl>   
            <FormControl id="Time" >
              <FormLabel>New Quantity</FormLabel>
              <Input type="number" value={stock} onChange={(e)=>setstock(e.target.value)} />
            </FormControl> 
            <Stack pt={5} spacing={6} direction={['column', 'row']}>
          <Box><Button leftIcon={<IoMdArrowRoundBack/>}
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
           }}c onClick={formclear}>
            Go Back
          </Button></Box>
          <Button 
          rightIcon={<MdOutlineBookmarkAdded/>}
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}
            type="submit"  onClick={handelUpdate }  >
            Submit
          </Button>
        </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </Container>
    </Stack>
    </SimpleGrid>
  );
}
