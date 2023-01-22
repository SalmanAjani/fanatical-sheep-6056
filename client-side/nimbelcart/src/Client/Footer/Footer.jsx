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
  {id:1,data:"About Us"},
  {id:2,data:"Partner with us"},
  {id:3,data:"Terms & Conditions"},
  {id:4,data:"Blog"},
  {id:5,data:"Media"},
  {id:6,data:"24x7 Help"},
  {id:7,data:"Grievance policy"},
  {id:8,data:"Bug bounty"},
  {id:9,data:"Return/Cancellation polic"}
  ];
const icons = [
  {id:1,data:"https://www.nicepng.com/png/detail/212-2128366_verified-by-visa-logo.png"},
  {id:2,data:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png"},
  {id:3,data:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/383px-RuPay.svg.png?20200901070738"},
  {id:4,data:"https://chosenpayments.com/wp-content/uploads/2018/01/amex-safekey-logo.jpg"},
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
            <Text key={item.id}_hover={{ color: "red" }} fontSize={[6,9,11]}>
              {item.data}
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
          <Box key={img.id} w={["8%", "6%", "4%", "3%"]}>
            <Image w="100%" src={img.data} alt="img" />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default Footer;
//
