import React, { useEffect, useState } from 'react'
import {Table,Thead,Tbody,TableCaption,TableContainer,Divider,Image, Flex, Button,useToast, Tr, Th} from '@chakra-ui/react'
import { FcAdvertising } from 'react-icons/fc';
import { FiEdit } from 'react-icons/fi';
import { VscPreview } from "react-icons/vsc";
import { GiEmptyWoodBucket } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { DELETE_ADMIN_DATA, GET_ADMIN_DATA } from '../../../redux/app/admin/action';
import { Pagination } from "../Pagination"

const ManageProducts = () => {
  const toast= useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const PRODUCTS= useSelector((state)=> state.Adminreducer.adminProducts)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleDeleteData =(id)=>{
      dispatch(DELETE_ADMIN_DATA(id)) 
      dispatch(GET_ADMIN_DATA()) 
      toast.success("Product removed successfully")
  }
  const handleEdit =(id,title)=>{
     navigate(`/${id}/${title}/edit`)
  }
  const handleProductPreView =(id,title)=>{
    navigate(`/${id}/${title}/displayproduct`)
 }
  useEffect(() => {
    if(PRODUCTS.length >= 0) {
        dispatch(GET_ADMIN_DATA())
    }
  }, [PRODUCTS.length,dispatch])

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = PRODUCTS.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      <TableContainer>
        <Table variant='striped' colorScheme='red'>
          <TableCaption>Manage your all the products</TableCaption>
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
          <Tbody>
            {currentProducts.map((item, index) =>
              <Tr key={item.id}>
                <Th textAlign={"center"}>{index + 1}</Th>
                <Th textAlign={"center"}><Image w={16} h={9} src={item.images} alt={item.id}/></Th>
                <Th textAlign={"center"}>{item.subtitle}</Th>
                <Th visibility={["collapse","visible"]} textAlign={"center"}>{item.quantity}</Th>
                <Th visibility={["collapse","visible"]} textAlign={"center"}>{item.quantity*7}</Th>
                <Th visibility={["collapse","visible"]} textAlign={"center"}>{item.price}</Th>
                <Th visibility={["collapse","visible"]} textAlign={"center"}>{(item.quantity*7)*(item.price)}</Th>
                <Divider visibility={["collapse","visible"]} orientation='vertical' bg={"red"} h={"65px"}/>
                <Th>
              <Flex align={"center"} justify={"center"} gap={2}>
              <Button visibility={["collapse","visible"]}  variant='outline' colorScheme='green' 
                 onClick={()=>handleProductPreView(item.id,item.title) } ><VscPreview/></Button>
                <Button visibility={["collapse","visible"]}  variant='outline' colorScheme='yellow'><FcAdvertising/></Button>
                <Button visibility={["collapse","visible"]}  variant='outline' colorScheme='green' 
                 onClick={()=>handleEdit(item.id,item.title) } ><FiEdit/></Button>
                <Button visibility={["collapse","visible"]}  variant='outline' colorScheme='red'
                onClick={()=>handleDeleteData(item.id)}
                ><GiEmptyWoodBucket/></Button>
              </Flex>
                </Th>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination
        totalProducts={PRODUCTS.length}
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default ManageProducts;

