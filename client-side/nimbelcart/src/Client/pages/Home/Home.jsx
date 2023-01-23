import React from "react";

import GiftCards from "./giftcards";
import data from "./hompagedb.json";
import AccordionsHome from "./AccordionsHome";
import { Accordion, Grid, Flex, Center, Box } from "@chakra-ui/react";
import { IoBagCheckSharp, IoHeartOutline } from "react-icons/io5";
import { RiShieldStarLine } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import CarouselHome from "./Carousel_home";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div>
      <CarouselHome />
      {/* ?products showcase */}
      <GiftCards products={data.mens} heading="Men's Wear & Fashion" />
      <GiftCards products={data.Womens} heading="Women's Wear & Fashion" />
      <GiftCards products={data.child} heading="Kid's Wear & Fashion" />

      {/* Acoordions general site information */}
      <Accordion
        allowToggle
        borderTop={"0.1px solid #d9d9d9"}
        mt="5em"
        bg="#F7F7F10"
      >
        {data.accordion.map((item) => (
          <AccordionsHome item={item} key={Math.random() * 100000} />
        ))}
      </Accordion>

      <Grid
        templateColumns={{ base: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
        w="95%"
        m="auto"
        mt="60px"
        gap="20px"
        borderBottom={"30px solid #f3f7f8"}
      >
        <Flex direction={"column"} gap="10px">
          <Center>
            <IoHeartOutline />
          </Center>
          <Center>24x7 Help</Center>
          <Center fontSize={"12px"} fontFamily="cursive">
            Need Help? Click Here. You can also talk to us on 0120 4606060 to
            resolve your query.
          </Center>
        </Flex>

        <Flex direction={"column"} gap="10px">
          <Center>
            <VscWorkspaceTrusted />
          </Center>
          <Center>NimbleCart Trust</Center>
          <Center fontSize={"12px"} fontFamily="cursive">
            Your money is yours! All refunds come with no question asked
            guarantee.
          </Center>
        </Flex>

        <Flex direction={"column"} gap="10px">
          <Center>
            <RiShieldStarLine />
          </Center>
          <Center>100% Assurance</Center>
          <Center fontSize={"12px"} fontFamily="cursive">
            At NimbleCart, we provide 100% assurance. If you have any issue,
            your money is immediately refunded. Sit back and enjoy your
            shopping.
          </Center>
        </Flex>

        <Flex direction={"column"} gap="10px">
          <Center>
            <IoBagCheckSharp />
          </Center>
          <Center>NimbleCart Mall Promise</Center>
          <Center fontSize={"12px"} fontFamily="cursive">
            Products with this tag are quality checked, and shipped the same day
            from certified warehouses. So you get the right product, faster.
          </Center>
        </Flex>
      </Grid>
    </div>
  );
};

export default Home;
