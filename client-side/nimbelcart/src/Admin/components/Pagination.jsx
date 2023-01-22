import React from "react";
import { Button, Flex } from "@chakra-ui/react";

export const Pagination = ({
  totalProducts,
  productsPerPage,
  currentPage,
  handlePageChange,
  lastPage
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Flex justifyContent="center">
      { (
        <Button
          variant="outline"
          colorScheme="red"
          isDisabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          mr={2}
        >
          Previous
        </Button>
      )}
      {pageNumbers.map((number) => (

        <Button
          variant="outline"
          colorScheme={currentPage === number ? "green" : "red"}
          onClick={() => handlePageChange(number)}
          mr={2}
          key={number}
          isDisabled={currentPage === number}
        >
          {number}
        </Button>
      ))}
      { (
        <Button
          isDisabled={currentPage === lastPage}
          variant="outline"
          colorScheme="red"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
      )}
    </Flex>
  );
};