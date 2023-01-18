import { Box, Button, Text, Tooltip, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";



const EmptyCart = () => {
  return (
    <>
    
    
    <Box align='center' py='12'>
      <Tooltip
      
        placement='top'
        bg='blackAlpha.700'
        label='Your Shopping Cart is Empty'
      >
        <Image
          src='https://mir-s3-cdn-cf.behance.net/projects/404/54b13147340145.Y3JvcCw0MDUsMzE3LDAsNDI.png'
          alt='empty-cart'
        />
      </Tooltip>
      <Text fontSize='xl'>Your Shopping Cart is Empty</Text>
      <NavLink to='/'>
        <Button
          w='3xs'
          py='6'
          m='auto'
          mt='16'
          bg='orange.600'
          color='white'
          fontSize='sm'
          boxShadow='lg'
          borderRadius='4'
          fontWeight='semibold'
          _hover={{ bg: "red.700" }}
          _active={{ bg: "red.700" }}
        >
          CONTINUE SHOPPING
        </Button>
      </NavLink>
    </Box>
    </>
  );
};

export default EmptyCart;
