import React,{  useState }  from 'react'
import {Flex,Box,FormControl,FormLabel,Input,Stack,Button, Heading,  useColorModeValue, Container, Hide, Center,} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { AiFillFileAdd } from 'react-icons/ai';
import { ADD_ADMIN_DATA } from '../../../redux/app/admin/action';

import { toast } from 'react-toastify';

export const Addproduct =()=> {
  const {useruid} =[]
const [form, setForm]= useState({
  image: "",
  des:"",
  price: "",
  user_id: useruid,
})
const dispatch = useDispatch();
const formclear =()=>{
  setForm({
    ...form,
    name: "",
    image: "",
    desc:"",
    price: null,
  })
}

const OnChangeValue =(e)=>{
  let{name:key,value}= e.target ;
setForm({
      ...form,
      [key]:value
    })
  }


const OnsubmitPress =(e)=>{
  e.preventDefault();
console.log(form)
    dispatch( ADD_ADMIN_DATA({...form})).then((r)=>{
    })
    setForm({
      ...form,
    name: "",
    image: "",
    desc:"",
    newPrice: null,
    oldPrice:null,

    })
    toast.success("Product Added Sucessfully")
  }


  return (
    <Stack justify={"center"} align={"center"}>
    <Container p={0} m={0} border={0}>
    <Flex 
     
      align={'center'}
      justify={'center'}
      p={0} m={0}
   >
      <Stack spacing={8} mx={'auto'}w={["lg","lg","auto"]} py={2} >
        <Stack align={'center'} justify={"center"}>
          <Heading fontSize={'4xl'} textAlign={'center'} pt={[0,10,10]}>
             Add Product Here
          </Heading>
        </Stack>
        <Center>
        <Box w={["xs","xs","7xl"]}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          px={8} py={[10,10]}  pb={[10,"100px"]}
          >
          <Stack spacing={[2,8,8]}>
          <form>
            <FormControl id="Title" isRequired>
                  <FormLabel>Title</FormLabel>
                  <Input type="text"onChange={OnChangeValue}   name="name" />
                </FormControl>
            <FormControl id="Image" isRequired>
              <FormLabel>Image Url</FormLabel>
              <Input type="Text" onChange={OnChangeValue} name="image"  />
            </FormControl>
            <FormControl id="Description" isRequired>
                  <FormLabel>Description</FormLabel>
                  <Input type="text" onChange={OnChangeValue}  name="desc"/>
                </FormControl>
              <FormControl id="Quqantity" isRequired>
              <FormLabel>Quantity(unit)</FormLabel>
              <Input type="number" onChange={OnChangeValue}  name="quantity"/>
            </FormControl> 
            <FormControl id="price" isRequired>
              <FormLabel>Price (₹)</FormLabel>
              <Input type="number" maxLength={"2"} onChange={OnChangeValue}  name="price"/>
            </FormControl> 
            <Hide>
            <FormControl >
              
              <Input type="text" onChange={OnChangeValue} value={useruid}  name="user_id"/>
            </FormControl>  
            </Hide> 
            <Stack pt={5} justify={["space-evenly","flex-end"]} spacing={6} direction={['row', 'row']}>
          <Box><Button
            bg={'red.400'}
            color={'white'}
            size='lg'
            _hover={{
              bg: 'red.500',
           }} onClick={formclear}>
            Cancel
          </Button></Box>
          <Button
            bg={'green.600'}
            color={'white'}
            rightIcon={<AiFillFileAdd/>}
            size={'lg'}
            _hover={{
              bg: "teal.300",
              color:"blackAlpha.900"
            }}
            type="submit"  onClick={ OnsubmitPress}  >
            Add
          </Button>
        </Stack>
            </form>
          </Stack>
        </Box>
        </Center>
      </Stack>
    </Flex>
    </Container>
    </Stack>
  );
}

