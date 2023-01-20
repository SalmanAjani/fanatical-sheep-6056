/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  useToast,
} from "@chakra-ui/react";

import { MdLocalShipping } from "react-icons/md";

import "swiper/css";
import Carousel from "./Carousel";

import data from "../../../Assets/data/products.json";

const ProductDetails = () => {
  let element = JSON.parse(localStorage.getItem("element"));
  const toast = useToast();

  useEffect(() => {
    element = JSON.parse(localStorage.getItem("element")) || {};
  }, [element]);

  const handleAdd = (data) => {
    let dataObj = {
      title: data.title,
      images: data.images[0],
      discounted_price: data.discounted_price,
      quantity: data.quantity,
    };
    toast({
      position: "top-right",
      title: "Product added to cart.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    fetch("https://odd-tan-lizard-kit.cyclic.app/cart", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={element.images[element.images.length - 1]}
              align={"center"}
              w={{ base: "50%", lg: "75%" }}
              margin={{ base: "auto", lg: "none" }}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"} textAlign={{ base: "center", lg: "left" }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {element.title}
              </Heading>
              <Text
                lineHeight={1.1}
                fontWeight={400}
                fontSize={{ base: "20px", lg: "30px" }}
                marginTop="10px"
              >
                {element.subtitle}
              </Text>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
                marginTop="10px"
              >
                Price: ${element.discounted_price}{" "}
                <span style={{ textDecoration: "line-through", color: "red" }}>
                  {" "}
                  ${element.strike_price}
                </span>{" "}
                <span style={{ color: "red" }}>{element.discount}</span>
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <Box textAlign={{ base: "center", lg: "left" }}>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Product Details
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Material Composition:
                    </Text>{" "}
                    60% Cotton, 40% Polyester
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Care Instructions:
                    </Text>{" "}
                    Machine Wash
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Country of Origin:
                    </Text>{" "}
                    India
                  </ListItem>
                </List>
              </Box>
            </Stack>

            <Box textAlign={{ base: "center", lg: "left" }}>
              <Button
                rounded={"none"}
                w={"full"}
                mt={8}
                size={"lg"}
                py={"7"}
                bg={useColorModeValue("gray.900", "gray.50")}
                color={useColorModeValue("white", "gray.900")}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
                onClick={() => handleAdd(element, element.id)}
              >
                Add to cart
              </Button>
            </Box>

            <Box textAlign={{ base: "center", lg: "left" }}>
              <Stack alignItems={{ base: "center", lg: "left" }}>
                <MdLocalShipping />
                <Text>2-3 business days delivery</Text>
              </Stack>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box textAlign="center" marginTop="60px" marginBottom="30px">
        <Carousel
          link={"/products"}
          title="Men's New Arrivals"
          data={data.Mens}
        />
      </Box>
    </>
  );
};

export default ProductDetails;
