import { Image, Box, Text, Flex, Icon, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
  ]
};
export const ProductPreview = () => {
  const imageRef = useRef(null);
  const { colorMode, toggleColorMode } = useColorMode();
  const [product, setProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState(product.images ? product.images[0] : "");
  const [zoom, setZoom] = useState(false);
  const { id } = useParams();
  const products = useSelector((state)=> state.Adminreducer.adminProducts)

  useEffect(() => {
    if (id) {
      const productId = products.find((product) => product.id === Number(id));
      setProduct(productId);
    }
  }, [id, products]);

  useEffect(() => {
    if (zoom) {
      imageRef.current.requestFullscreen();
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    }
  }, [zoom]);

  return (
    <Flex p={4} flexDirection={{ base: "column", md: "row" }} align="center" justify="center">
      <Box>
        <Image
          src={selectedImage}
          alt={product.title}
          ref={imageRef}
          onClick={() => setZoom(!zoom)}
          w={{ base: "100%", md: "50%" }}
          h={{ base: "50vh", md: "50vh" }}
        />
        {zoom && (
          <Flex
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg={ "rgba(255, 255, 255, 0.5)"}
            align="center"
            justify="center"
            onClick={() => setZoom(false)}
          >
            <Icon name="zoom-out" size="3xl" color="white" cursor="pointer" />
          </Flex>
        )}
      </Box>
      <Flex flexWrap={{ base: "wrap", md: "nowrap" }} p={4} w={{ base: "100%", md: "50%" }}>
        {product.images && product.images.map((image) => (
          <Box w={""} key={image} onClick={() => setSelectedImage(image)}>
            <Image w={"75px"} h={"75px"} src={image} alt={product.title}  />
          </Box>
        ))}
      </Flex>

      <Box>
      <Text fontWeight="bold" fontSize="xl">
        {product.title}
       </Text>
        <Text>{product.subtitle}</Text>
        <Text>{product.discounted_price}</Text>
        <Text>
        {product.price} {product.strike_price} {product.discount}
        </Text>
        <Text>{product.description}</Text>
        </Box>
        </Flex>
);
};