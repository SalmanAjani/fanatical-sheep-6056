import React,{  useState }  from 'react'
import {Flex,Box,FormControl,FormLabel,Input,Stack,Button, Heading,  useColorModeValue, Container, Center,useToast} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { AiFillFileAdd } from 'react-icons/ai';
import { ADD_ADMIN_DATA } from '../../../redux/app/admin/action';


export const Addproduct =()=> {
  const toast = useToast();
const [form, setForm]= useState({
  title: "",
  subtitle: "",
  images: "",
  discounted_price: "",
  quantity: "",
  userid:""
  // JSON.parse(localStorage.getItem("user"))._id || 0
     
})
const dispatch = useDispatch();
const formclear =()=>{
  setForm({
    ...form,
    title: "",
    subtitle: "",
    images: "",
    discounted_price: "",
    quantity: "",
    price:""
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
      title: "",
      subtitle: "",
      images: "",
      discounted_price: null,
      quantity: null,
      price:""

    })
    toast({
      position: "top-right",
      title: "Product added Sucessfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
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
                  <FormLabel>Brand</FormLabel>
                  <Input type="text"onChange={OnChangeValue}  value={form.title}  name="title" />
                </FormControl>
                <FormControl id="Title" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text"onChange={OnChangeValue}   value={form.subtitle} name="subtitle" />
                </FormControl>
            <FormControl id="Image" isRequired>
              <FormLabel>Image Url</FormLabel>
              <Input type="Text" onChange={OnChangeValue} value={form.images} name="images"  />
            </FormControl>
            <FormControl id="Description" isRequired>
                  <FormLabel>Discounted Price</FormLabel>
                  <Input type="text" onChange={OnChangeValue}  value={form.discounted_price} name="discounted_price"/>
                </FormControl>
              <FormControl id="Quqantity" isRequired>
              <FormLabel>Quantity(unit)</FormLabel>
              <Input type="number" onChange={OnChangeValue}  value={form.quantity} name="quantity"/>
            </FormControl> 
            <FormControl id="price" isRequired>
              <FormLabel>Price (₹)</FormLabel>
              <Input type="number" maxLength={"2"} onChange={OnChangeValue}  value={form.price} name="price"/>
            </FormControl>  
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