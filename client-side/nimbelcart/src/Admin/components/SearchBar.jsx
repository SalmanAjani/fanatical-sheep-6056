import { Box, Flex, HStack, Image,  Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SEARCH_ADMIN_DATA } from '../../redux/app/admin/action';


export const SearchBar = ({query}) => {

    const [suggestion,setSuggestion]=useState([]);
    const dispatch =useDispatch();
    const PRODUCTS=useSelector((state)=> state.Adminreducer.adminSearchData)
    useEffect(()=>{
        if(PRODUCTS.length>=0){
            dispatch(SEARCH_ADMIN_DATA())
        }
    },[])

    useEffect(()=>{
        if(query=== ""){
             setSuggestion([]);  
        }
        else{
            const searchQuery = query.trim().toLowerCase();
           let newSuggestion =   PRODUCTS.filter((el)=>{
              if(el.subtitle!==undefined ){
             if(el.subtitle.includes(searchQuery) ){
                   return el
               }

              }
            })
            setSuggestion(newSuggestion); 
        }
    },[query])

  return (
    <Box opacity={"100%"}  >
    {suggestion.length>0 &&(
    <Box bg={"black"} zIndex={25} position={"absolute"} overflow={"auto"} border={"3px solid #1a202c"} w={450} h={423}>
    {suggestion.map((item,i)=>
       <Link key={item.id} to={`/${item.id}/${item.title}/displayproduct`}> 
            <HStack  lineHeight={"25px"} mt={"3px"} bg={"#171923"} h={"80px"} 
                    _hover={{ bg: "tomato", color: " white" }}>
                      <Flex flex={3}><Image ml={"6px"}  borderLeftRadius={"5px"} src={item.images[0]} w={"142px"} h={"74px"}  /></Flex>
                      <Flex flex={8}> <Text px={2} isTruncated as={"b"} color={"white"}>{item.subtitle}</Text></Flex> 
            </HStack> 
      </Link>
    )}
     </Box>
 )} 
  </Box>
  )
}



