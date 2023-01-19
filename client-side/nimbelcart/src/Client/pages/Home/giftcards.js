import React from "react";
import { Box, Grid, Center, Heading, Image} from "@chakra-ui/react";

function GiftCards({ products, heading }) {
  return (
    <Box>
      <Box mt="4em">
        <Center>
          <Heading fontSize={{ sm: "1rem", md: "1.5rem", lg: "2rem" }} mb="1em">
            {heading}
          </Heading>
        </Center>
        <Grid
          templateColumns={{base:"1fr",sm:"1fr 1fr ",md:"1fr 1fr 1fr",lg:"repeat(4,1fr)"}}
          gap="10px"
          w="95%"
          m="auto"
          mt="1em"
        >
          {products.map((item) => (
            <Box>
              <Image src={item.img} alt="img" />
              <Center fontWeight={"bold"} mt="30px">{item.title}</Center>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default GiftCards;
