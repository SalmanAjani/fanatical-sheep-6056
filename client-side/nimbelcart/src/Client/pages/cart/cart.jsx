import React, { useState } from "react";
import CartErr from "./cartErr";
import EmptyCart from "./emptyCart";
import SingleCart from "./singleCart";
import CheckoutTab from "./checkoutTab";
// import { getData } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

import { Box, Text, Spinner, Heading, Stack, HStack } from "@chakra-ui/react";
import { getData } from "../../../redux/bag/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const { loading, error, items } = useSelector((store) => store.carts);
  // const items = JSON.parse(localStorage.getItem("cart-item")) || [];
  // items.push(

  // );

  let user = JSON.parse(localStorage.getItem("user"));
  console.log({ userid: user._id }, "user");

  React.useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (loading) {
    return (
      <Box align="center" py="12">
        <Spinner thickness="4px" speed="0.6s" color="red.600" size="xl" />
      </Box>
    );
  }

  if (error) return <CartErr />;
  if (!items || !items.length) {
    return <EmptyCart />;
  }

  return (
    <>
      <Stack
        direction={{ base: "column", lg: "row" }}
        justify="center"
        align={{ base: "flex-end", lg: "flex-start" }}
        px={{ base: "0", md: "2", lg: "8", xl: "20", "2xl": "24" }}
        py={{ base: "2", md: "6" }}
        gap={{ base: "none", md: "4", lg: "6" }}
        bg="blackAlpha.100"
      >
        <Stack direction="column" align="left" gap="0.5" w="100%">
          <HStack align="center" bg="white" boxShadow="sm" p="4">
            <Heading as="h1" size="sm" fontWeight="semibold">
              My Cart
            </Heading>
            <Text fontSize="sm" color="blackAlpha.800">
              ({`${items.length} ${items.length === 1 ? "item" : "items"}`})
            </Text>
          </HStack>
          {items.map((item) => (
            <SingleCart key={item._id} items={items} {...item} />
          ))}
        </Stack>
        <CheckoutTab items={items} />
      </Stack>
    </>
  );
};
