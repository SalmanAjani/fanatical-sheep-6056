import React,{ useEffect,  useState }  from 'react'
import {Flex,Box,FormControl,FormLabel,Input,Stack,Button, Heading, Text, useColorModeValue, Container, Image, SimpleGrid, VStack, HStack,} from '@chakra-ui/react';
import { useDispatch, useSelector,  } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { EDIT_ADMIN_DATA } from '../../../redux/app/admin/action';
export const Editproduct =()=> {
  const Priviousdata = "Privious data will Remain same if Seasonfild gonna be Empty."
    const[title,settitle]=useState("");
    const[subtitle,setsubtitle]=useState("");
    const [images, setImages]= useState("")
    const [price, setprice]= useState("")
    const [quantity, setquantity]= useState("")
    const[previousdata,setPreviousData]=useState({});
    const {id} =useParams();
    const PRODUCTS= useSelector((state)=> state.Adminreducer.adminProducts)
    
    const dispatch = useDispatch();
    const formclear =()=>{
    navigate(-1)
    }

    const navigate =useNavigate();
    const handelUpdate =()=>{
      const payload={
      }
      if(title !== ""){
          payload.title = title 
      }
      if(subtitle
        !== ""){
        payload.subtitle = subtitle
      }
      if(images !== ""){
        payload.images = images
      }
      if(price !== ""){
        payload.price=  price
      }
      if(quantity !== ""){
        payload.quantity =  quantity
      } 
        dispatch(EDIT_ADMIN_DATA(id,payload))
        .then(()=>{

        });
        toast.success("Updated sucessfully")
        navigate("/admin/manageproducts")
    
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
                          <Image borderRadius={"5px"} border={"2px solid RGBA(0, 0, 0, 80)"} m={0} width={300} height={169} boxShadow={"xl"} src={previousdata.images} alt={previousdata.id}/>
                          <VStack>
                          <FormControl > <FormLabel color={"black"} as="b" >Previous Brand</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"30px"} overflow={"auto"}>
                              <Text  px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {previousdata.title}</Text></Box></FormControl>
                              <VStack>
                          <FormControl> <FormLabel color={"black"} as="b">Previous Name</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"50px"} overflow={"auto"}>
                              <Text  px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"} > {previousdata.subtitle}</Text></Box></FormControl>
                              <Text color={"red.500"} as={"i"} fontSize={"2xs"}>Scroll down to read Description</Text>
                            </VStack>
                            <FormControl> <FormLabel color={"black"} as="b">Previous Price</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"30px"} overflow={"auto"}>
                         <Text px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {previousdata.price}</Text></Box></FormControl>
                         <FormControl> <FormLabel color={"black"} as="b">Previous Quantity</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"30px"} overflow={"auto"}>
                         <Text px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {previousdata.quantity}</Text></Box></FormControl>
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
                    <Image  borderRadius={"5px"} border={"2px solid RGBA(0, 0, 0, 80)"} m={0} width={300} height={169} boxShadow={"xl"}  src={images} alt={title}/>
                    <VStack>
                    <FormControl > <FormLabel color={"black"} as="b" >Updated Brand</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"30px"} overflow={"auto"}>
                         <Text  px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {title?`${title}`:`${Priviousdata}`}</Text></Box></FormControl>
                        <VStack>
                     <FormControl> <FormLabel color={"black"} as="b">Updated Name</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"50px"} overflowX={"auto"}>
                         <Text  px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > subtitlec?`${subtitle}`:`${Priviousdata}`</Text></Box></FormControl>
                     {subtitle===""?"":  <Text  mt={-20} p={0} as={"b"} textAlign={"center"} color={"red.500"} fontSize={"2xs"}>Scroll Down</Text>}
                       </VStack>
                       <FormControl> <FormLabel color={"black"} as="b">Updated Price</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"30px"} overflow={"auto"}>
                         <Text px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {price?`${price}`:`${Priviousdata}`}</Text></Box></FormControl>
                         <FormControl> <FormLabel color={"black"} as="b">Updated Quantity</FormLabel> <Box  borderRadius={"5px"} width={"270px"} border={"1px solid RGBA(0, 0, 0, 0.16)"}  h={"30px"} overflow={"auto"}>
                         <Text px={5} textAlign={"left"} as={"b"} color={"blackAlpha.600"}  > {quantity?`${quantity}`:`${Priviousdata}`}</Text></Box></FormControl>
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
            Edit here
          </Heading>
          <Text color={"teal.400"} fontSize={'lg'} >
          Edit single & Multiple item here
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
                  <FormLabel>New Brand</FormLabel>
                  <Input type="text" value={title} onChange={(e)=>settitle(e.target.value)}  />
                </FormControl>
            <FormControl id="Image" >
              <FormLabel>New Image</FormLabel>
              <Input type="Text" value={images} onChange={(e)=>setImages(e.target.value)}  />
            </FormControl>
            <FormControl id="Description" >
                  <FormLabel>New Name</FormLabel>
                  <Input type="text" value={subtitle} onChange={(e)=>setsubtitle(e.target.value)}   />
                </FormControl>
            <FormControl id="Time" >
              <FormLabel>New Price</FormLabel>
              <Input type="number" value={price} onChange={(e)=>setprice(e.target.value)} />
            </FormControl>   
            <FormControl id="Time" >
              <FormLabel>New Quantity</FormLabel>
              <Input type="number" value={quantity} onChange={(e)=>setquantity(e.target.value)} />
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

