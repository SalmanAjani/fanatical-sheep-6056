import {
  Box,
  Text,
  Stack,
  Button,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast
} from "@chakra-ui/react";

export const Support=()=> {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Submitted Successfully.",
      description: "We will get back to you soon.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    onClose();
  }
  return (
    <Box>
      <Stack spacing={4}>
        <Button variantColor="green" onClick={() => window.location.href = 'tel:123-456-7890'}>
          Call Us
        </Button>
        <Button variantColor="blue" onClick={onOpen}>
          Chat with Us
        </Button>
        <Drawer
          isOpen={isOpen}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>Chat with Us</DrawerHeader>
            <DrawerBody>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Enter your name" />
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="Enter your email" />
                </FormControl>
                <FormControl>
                  <FormLabel>Message</FormLabel>
                  <Textarea placeholder="Enter your message" />
                </FormControl>
              </form>
            </DrawerBody>
            <DrawerFooter>
              <Button variantColor="blue" mr={3} onClick={handleSubmit}>
                Submit
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Stack>
    </Box>
  );
}