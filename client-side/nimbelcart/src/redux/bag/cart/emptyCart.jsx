import { Box, Button, Text, Tooltip, Image } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addtocart } from "./redux/actions";



const EmptyCart = () => {
const dispatch = useDispatch();

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
    {/* <button onClick={()=> dispatch(addtocart({
    discount: 4,
    name: "Apple Watch SE GPS + Cellular - 40 mm Silver Aluminium Case with White 2nd Generation Sport Band",
    price: 80000,
    quantity: 1,
    url: "https://www.reliancedigital.in/medias/Apple-Ultra-Sports-Fitness-Watches-493177945-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w5MTcyMHxpbWFnZS9qcGVnfGltYWdlcy9oNjMvaDY3Lzk4OTE5NjA5MTM5NTAuanBnfGM1ZjRkMjAwMWExYzg1MTA4ODYzOTYyOWRlOWNkY2JlNjA5ZjFjYmY4Yzg3ZjRiNzA0ODczMTY4YzNhMWYxODk",
  }))}>add to cart</button> */}
    </>
  );
};

export default EmptyCart;
