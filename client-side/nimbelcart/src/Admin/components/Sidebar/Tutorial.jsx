import React from 'react'
import { Box, Heading, Image, Button, Center, Text, Divider, SimpleGrid, VStack, Stack } from '@chakra-ui/react'

export const Tutorial = () => {
    const requestZoomCall = (title) => {
        // Send a request to schedule a Zoom call for the video with the given title
      }
      
  return (
    <Box py={15}>
      <Heading textAlign={"center"} as="h1" size="lg" pb={7}>Learn With Us</Heading>
      <Divider></Divider>
      <Stack align={"center"} justify={"center"}>
      <SimpleGrid columns={[1,2,2]}  >
        {videos.map((video, index) => (
          <Box key={index} w="33.33%" p={5}>
            <Image src={video.thumbnail} alt={video.title} />
            <Heading as="h2" size="md">{video.title}</Heading>
          </Box>
        ))}
      </SimpleGrid>
      </Stack>
      
        <Divider p={4}/>
        <Center p={5}>
       <VStack>
       <Text color={"yellow.400"}>Still have a Doubt?</Text>
      <Button colorScheme={"telegram"} onClick={() => requestZoomCall()}>
              Request Zoom Call
            </Button>
       </VStack>
      </Center>
    </Box>
  )
}

const videos = [
  {
    thumbnail: 'https://cdn.learnwoo.com/wp-content/uploads/2016/11/Adding-Products_Cropped.png',
    title: 'Add Your Product To Cart'
  },
  {
    thumbnail: 'https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/registry_edit.png',
    title: 'Edit Your Product'
  },
  {
    thumbnail: 'https://a.storyblok.com/f/155983/1300x800/fa95149cd7/how-to-run-multiple-ad-campaigns-on-facebook.png',
    title: 'Maximixe Product Reachable'
  }
  ,
  {
    thumbnail: 'https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/cube_red_delete.png',
    title: 'Remove Your Product'
  }
]
