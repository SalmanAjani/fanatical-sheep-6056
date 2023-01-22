import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, Textarea, Select, Checkbox, Button, Stack, CheckboxGroup, SimpleGrid, HStack, Text, Container } from "@chakra-ui/react";
import React,{ useState } from "react";
import { TiSocialLinkedin,TiSocialTwitter } from "react-icons/ti";
import { SlSocialGoogle, SlSocialInstagram, SlSocialYoutube } from "react-icons/sl";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from "react-icons/fa";
import {Payment} from "../../Client//pages/Payments/Payment.jsx"
export const  AddCampaignModal=({ isOpen, onClose }) =>{
  const [budget, setBudget] = useState(100);
  const [targetAudience, setTargetAudience] = useState(10000);
  const [platforms, setPlatforms] = useState([]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to server or add to state
    console.log("Budget: ", budget);
    console.log("Target Audience: ", targetAudience);
    console.log("Platforms: ", platforms);
    console.log("Message: ", message);
    onClose();
  };

  return (
    <Container mt={[5,20,50]}>
    <Modal isOpen={isOpen}  onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Campaign</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Budget</FormLabel>
              <Input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Target Audience</FormLabel>
              <Input type="number" value={targetAudience} onChange={(e) => setTargetAudience(e.target.value)} />
            </FormControl>
            <FormControl mt={4}>
            <FormLabel>Platforms</FormLabel>
            <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
              <SimpleGrid columns={2} spacing={2}>
              <HStack><Checkbox value="Facebook" onChange={(e) => setPlatforms([...platforms, e.target.value])}><FaFacebook color="#385898"/> </Checkbox><Text>Facebook</Text></HStack>
               <HStack> <Checkbox value="Instagram" onChange={(e) => setPlatforms([...platforms, e.target.value])}><SlSocialInstagram color="pink"/></Checkbox><Text>Instagram</Text></HStack>
               <HStack> <Checkbox value="YouTube" onChange={(e) => setPlatforms([...platforms, e.target.value])}><SlSocialYoutube color="red"/></Checkbox><Text>You Tube</Text></HStack>
               <HStack> <Checkbox value="Google Ads" onChange={(e) => setPlatforms([...platforms, e.target.value])}><FcGoogle /></Checkbox><Text>Web Application</Text></HStack>
               <HStack> <Checkbox value="Twitter" onChange={(e) => setPlatforms([...platforms, e.target.value])}><TiSocialTwitter color="#138ae3"/></Checkbox><Text>Twitter</Text></HStack>
               <HStack> <Checkbox value="LinkedIn" onChange={(e) => setPlatforms([...platforms, e.target.value])}><TiSocialLinkedin color="#138ae3"/></Checkbox><Text>LinkedIn</Text></HStack>
              </SimpleGrid>
            </CheckboxGroup>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Message</FormLabel>
              <Textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            </FormControl>
            <Checkbox mt={4}>
              I agree to the terms and conditions
            </Checkbox>
          </form>
        </ModalBody>
        <ModalFooter>
          <HStack justify={"space-evenly"} align={"center"}>
            <>
          <Payment price={Number(budget)} />
          </>
          <Button ml={5}  colorScheme={"gray"} onClick={onClose}>Cancel</Button>
          </HStack>
            
        </ModalFooter>
      </ModalContent>
    </Modal>
    </Container>
  );
}


