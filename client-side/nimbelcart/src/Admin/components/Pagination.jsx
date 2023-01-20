import React from "react";
import { Button, Flex } from "@chakra-ui/react";

export const Pagination = ({
  totalProducts,
  productsPerPage,
  currentPage,
  handlePageChange,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Flex justifyContent="center">
      {currentPage > 1 && (
        <Button
          variant="outline"
          colorScheme="red"
          onClick={() => handlePageChange("prev")}
          mr={2}
        >
          Previous
        </Button>
      )}
      {pageNumbers.map((number) => (
        
        <Button
          variant="outline"
          colorScheme={currentPage === number ? "green" : "blue"}
          onClick={() => handlePageChange(number)}
          mr={2}
          key={number}
          disabled={currentPage === number}
        >
          {number}
        </Button>
      ))}
      {currentPage < pageNumbers.length && (
        <Button
          variant="outline"
          colorScheme="red"
          onClick={() => handlePageChange("next")}
        >
          Next
        </Button>
      )}
    </Flex>
  );
};