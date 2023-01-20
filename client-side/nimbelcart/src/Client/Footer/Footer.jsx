import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import {
  BsTwitter,
  BsYoutube,
  BsInstagram,
  BsApple,
  BsFacebook,
  BsMicrosoft,
} from "react-icons/bs";
import { AiFillAndroid } from "react-icons/ai";
const links = [
  "About Us",
  "Partner with us",
  "Terms & Conditions",
  "Blog",
  "Media",
  "24x7 Help",
  "Grievance policy",
  "Bug bounty",
  "Return/Cancellation policy",
];
const icons = [
  "https://www.nicepng.com/png/detail/212-2128366_verified-by-visa-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/383px-RuPay.svg.png?20200901070738",
  "https://chosenpayments.com/wp-content/uploads/2018/01/amex-safekey-logo.jpg",
];

function Footer() {
  return (
    <Box>
      {/* section-1 */}
      <Flex
        justify="space-between"
        m="10px"
        p="10px"
        color="tomato"
        gap="10px"
        fontSize={"0.8rem"}
        bg="#f3f7f8"
        direction={{ base: "column", md: "row" }}
      >
        {/* other links */}
        <Flex gap="10px">
          {links.map((item) => (
            <Text _hover={{ color: "red" }} fontSize={[6,9,11]}>
              {item}
            </Text>
          ))}
        </Flex>

        {/* site on other platforms */}
        <Flex
          gap="1em"
          align="center"
          _hover={{ color: "red" }}
          fontSize={[10, 12, 11]}
        >
          <BsApple />
          <BsMicrosoft />
          <AiFillAndroid />
          |
          <BsTwitter />
          <BsFacebook />
          <BsYoutube />
          <BsInstagram />
        </Flex>
      </Flex>

      {/* section-2 */}
      <Flex gap="10px" ml="30px">
        {/* payment partners  */}

        {icons.map((img) => (
          <Box w={["8%", "6%", "4%", "3%"]}>
            <Image w="100%" src={img} alt="img" />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default Footer;
//
