import { Box, Flex, HStack, Image,  Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SEARCH_ADMIN_DATA } from '../../redux/app/admin/action';


const SearchBar = ({query}) => {

    const [suggestion,setSuggestion]=useState([]);
    const dispatch =useDispatch();
    const PRODUCTS=useSelector((state)=> state.Adminreducer.adminSearchData)
    console.log(PRODUCTS,"prod")
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
              if(el.title!==undefined){
             if(el.title.includes(searchQuery)){
                   return el
               }
              }
            })
            setSuggestion(newSuggestion);
        }
    },[query])

  return (
    <Box opacity={"100%"} mt={"60px"} px={40}>
    {suggestion.length>0 &&(
    <Box bg={"black"} zIndex={25} position={"absolute"} overflow={"auto"} border={"3px solid #1a202c"} w={450} h={423}>
    {suggestion.map((item,i)=>
       <Link key={item.id} to={`/${item.id}/edit`}> 
            <HStack  lineHeight={"25px"} mt={"3px"} bg={"RGBA(0, 0, 0, 0.64)"} h={"80px"} 
                    _hover={{ bg: "#333333", color: " white" }}>
                      <Flex flex={3}><Image ml={"6px"}  borderLeftRadius={"5px"} src={item.image} w={"142px"} h={"74px"}  /></Flex>
                      <Flex flex={8}> <Text px={2} isTruncated as={"b"} color={"white"}>{item.title}</Text></Flex> 
            </HStack> 
      </Link>
    )}
     </Box>
 )} 
  </Box>
  )
}

export default SearchBar

