import { Image, Box, Text, Flex, Icon, useColorMode, useColorModeValue, SimpleGrid, Stack, HStack, Button, Select, useDisclosure, } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FcAdvertising } from 'react-icons/fc';
import { FiEdit } from 'react-icons/fi';
import { VscPreview } from "react-icons/vsc";
import { GiEmptyWoodBucket } from 'react-icons/gi';
import { DELETE_ADMIN_DATA, GET_ADMIN_DATA } from "../../redux/app/admin/action";
import { AddCampaignModal } from "./AddCampaignModal";
export const ProductPreview = () => {
  const imageRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch =useDispatch();
  const navigate =useNavigate();
  const [product, setProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState(product.images ? product.images[0] : null);
  const [magnifierVisibility, setMagnifierVisibility] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoom, setZoom] = useState(false);
  const { id } = useParams();
  const PRODUCTS = useSelector((state) => state.Adminreducer.adminSearchData);

  useEffect(() => {
    if (id) {
      const productId = PRODUCTS.find((PRODUCTS) => PRODUCTS.id === Number(id));
      setProduct(productId);
    }
  }, [id,PRODUCTS,dispatch]);

  useEffect(() => {
    if (product && product.images) {
        setSelectedImage(product.images[0]);
    }
  }, [product]);

  useEffect(() => {
    if (zoom) {
      imageRef.current.requestFullscreen();
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    }
  }, [zoom]);
  const handleDeleteData =(id)=>{
    dispatch(DELETE_ADMIN_DATA(id)) 
    dispatch(GET_ADMIN_DATA()) 
    // toast.success("Product removed successfully")
}
const handleEdit =(id,title)=>{
   navigate(`/${id}/${title}/edit`)
}

  

  return (
    <Stack align={"center"} justify={"center"} mt={[5,5,20]}>
    <SimpleGrid columns={[1,2,2]} >
      <Stack>
      <Box>
          <Flex alignItems='center' justifyContent='center'>
            <Image
              src={selectedImage}
              alt={product.title}
              ref={imageRef}
              onClick={() => setZoom(!zoom)}
              w="75%"
              h="50vh"
              />
              {magnifierVisibility && (
              <Box
              position="absolute"
              top={magnifierPosition.y - 150}
              left={magnifierPosition.x - 150}
              width={300}
              height={300}
              bg={"gray.700"}
              borderRadius={4}
              overflow='hidden'
              >
              <Image 
                             src={selectedImage} 
                             alt={product.title} 
                             w='100%'
                             h='100%'
                             objectFit='contain'
                           />
              </Box>
              )}
              {zoom && (
              <Flex
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg={"rgba(0, 0, 0, 0.5)"}
              align="center"
              justify="center"
              onClick={() => setZoom(false)}
              >
              <Icon name="zoom-out" size="3xl" color="white" cursor="pointer" />
              </Flex>
              )}
              </Flex>
              <Flex flexWrap="wrap" p={4} w="100%">
              {product && product.images && product.images.length>=2 ?  product.images.slice(0, 6 ).map((image, index) => (
              <Box
              m={2}
              boxShadow='outline'
              bg={selectedImage === image ? 'green' : 'tomato'}
              borderRadius={10}
              key={index}
              onClick={() => setSelectedImage(image)}
              >
              <Image p={1} borderRadius={10} src={image} alt={product.title} w="75px" h="75px" cursor="pointer" />
              </Box>
              )):""}
              </Flex>
              </Box>
      </Stack>
      <Stack>
      <Flex 
      p={4} 
      flexDirection="column" 
      align="center" 
      justify="center" 
      bg={useColorModeValue("white", "transparent")}
    >
      <Text ml={-50}  fontWeight="bold" fontSize="xl">
        Category: {product.category}
      </Text>
      <Text fontWeight="bold" fontSize="xl">
      Brand:  {product.title}
      </Text>
      <Text fontWeight="bold" fontSize="xl" width={200} noOfLines={3}>Name:{product.subtitle}</Text>
      <Flex justifyContent='space-between'>


              <Box>
              <HStack align={"center"} justify={"center"}>
              <Text  fontWeight="bold" ml={-7} fontSize="xl">Sizes </Text>
                {product && product.size && product.size.length>0 && product.size.map((size, index) => (
                  <Box w={6} h={6} align={"center"} justify={"center"} borderRadius={"50%"} color={"red"} bg={"blackAlpha.900"} key={index} >
                      <Stack align={"center"} justify={"center"}>
                          <Text fontSize={"xs"} p={"2px"} colorScheme={"white"} >{size}</Text>
                      </Stack>
                  </Box>
                ))}
                </HStack>
              <Text  fontWeight="bold" fontSize="xl">Discounted Price: {product.discounted_price}</Text>
              <Text fontWeight="bold" fontSize="xl">Strike Price: {product.strike_price}</Text>
              <Text fontWeight="bold" fontSize="xl">Discount: {product.discount}</Text>
              <Text fontWeight="bold" fontSize="xl">Quantity: {product.quantity}</Text>
              <Text fontWeight="bold" fontSize="xl">Ratings: {`${product.rating}/5`}</Text>
              <Text fontWeight="bold" fontSize="xl">Rating Count: {product.rating_count}</Text>
              </Box>
              </Flex>
              </Flex>
              <HStack p={5} align={"center"} justify={"center"} gap={2}>
             
            <AddCampaignModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
              <Button  onClick={() => setIsModalOpen(true)} variant='outline' colorScheme='yellow'><FcAdvertising/></Button>
              <Button  variant='outline' colorScheme='green' 
               onClick={()=>handleEdit(product.id,product.title) } ><FiEdit/></Button>
              <Button variant='outline' colorScheme='red'
              onClick={()=>handleDeleteData(product.id)}
              ><GiEmptyWoodBucket/></Button>
            </HStack>

          </Stack>
  
              </SimpleGrid>


              </Stack>
              );
              };
