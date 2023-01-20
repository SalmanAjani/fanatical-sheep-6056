import React, { useEffect } from 'react'
import {Table,Thead,Tbody,Tfoot,Tr,Th,TableCaption,TableContainer,Divider,Image, Flex, Button} from '@chakra-ui/react'
import { FcAdvertising } from 'react-icons/fc';
import { FiEdit } from 'react-icons/fi';
import { GiEmptyWoodBucket } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DELETE_ADMIN_DATA, GET_ADMIN_DATA } from '../../../redux/app/admin/action';
const Mangeproducts = () => {
 
  const PRODUCTS= useSelector((state)=> state.AppReducer.products)
  const dispatch =useDispatch();
  const navigate = useNavigate()
  const handelDeletedata =(id)=>{
      dispatch(DELETE_ADMIN_DATA(id))  
      toast.success("Product  Remove Successfully")
      
  }
  const handleEdit =(id,title)=>{
     navigate(`/${id}/${title}/edit`)
  }
  useEffect(()=>{
    if(PRODUCTS.length>=0){
        dispatch(GET_ADMIN_DATA())
    }
},[])
  return (
    <div>
<TableContainer>
  <Table variant='striped' colorScheme='red'>
    <TableCaption>Manage your all the The Products</TableCaption>
    <Thead textAlign={"center"}>
      <Tr borderTop={"1px solid red"} >
        <Th textAlign={"center"} >No</Th>
        <Th textAlign={"center"}>Display Image</Th>
        <Th  textAlign={"center"}>name</Th>
        <Th visibility={["collapse","visible"]}  textAlign={"center"}>Unit Remain</Th>
        <Th visibility={["collapse","visible"]}   textAlign={"center"}>Unit Sold</Th>
        <Th visibility={["collapse","visible"]}   textAlign={"center"}>Price (₹)</Th>
        <Th visibility={["collapse","visible"]}   textAlign={"center"} >Revenue (₹)</Th>
        <Divider  visibility={["collapse","visible"]}  orientation='vertical' bg={"red"} h={10}/>
        <Th   visibility={["collapse","visible"]}  textAlign={"center"}>Actions</Th>
      </Tr>
    </Thead>
    <Tbody >
    {PRODUCTS.length> 0 && PRODUCTS.map((item)=>
          <Tr>
          <Th textAlign={"center"}>1</Th>
            <Th   textAlign={"center"}><Image w={16} h={9} src='https://media.licdn.com/dms/image/C4D03AQGG0QJOuu9Lng/profile-displayphoto-shrink_400_400/0/1640068567052?e=1679529600&v=beta&t=M0by6EW4ocD8QnEk_m78qXG1N-WxTYc2jBgNP1RhC60' alt='Product name'/></Th>
            <Th  textAlign={"center"}>name</Th>
            <Th  visibility={["collapse","visible"]}  textAlign={"center"}>5</Th>
            <Th  visibility={["collapse","visible"]}  textAlign={"center"}>7</Th>
            <Th  visibility={["collapse","visible"]}   textAlign={"center"}>300</Th>
            <Th  visibility={["collapse","visible"]}   textAlign={"center"}>2100</Th>
            <Divider visibility={["collapse","visible"]}  orientation='vertical' bg={"red"} h={"65px"}/>
            <Th>
              <Flex align={"center"} justify={"center"} gap={2}>
                <Button visibility={["collapse","visible"]}  variant='outline' colorScheme='yellow'><FcAdvertising/></Button>
                <Button visibility={["collapse","visible"]}  variant='outline' colorScheme='green' 
                 onClick={()=>handleEdit(item.id,item.title) } ><FiEdit/></Button>
                <Button visibility={["collapse","visible"]}  variant='outline' colorScheme='red'
                onClick={()=>handelDeletedata(item.id)}
                ><GiEmptyWoodBucket/></Button>
              </Flex>
            </Th>
          </Tr>)}
    </Tbody>
    <Tfoot>
    
    </Tfoot>
  </Table>
</TableContainer>
    </div>
  )
}

export default Mangeproducts
