import { Box, Text, Flex, Select } from "@chakra-ui/react";
import { FaListUl } from "react-icons/fa";
import Pagination from "../Pagination.jsx";
import "../Products.css";

const Header = ({
  showSidebarButton = true,
  onShowSidebar,
  count,
  page,
  updateCurrentPage,
  sortorder,
  category,
}) => {
  const handlechange = (e) => {
    sortorder(e.target.value);
  };

  return (
    <Flex p={3}>
      <Box>
        {showSidebarButton && (
          <Flex gap={1} onClick={onShowSidebar} cursor="pointer">
            <Text>Filter</Text>
            <Box mt="5px">
              <FaListUl />
            </Box>
          </Flex>
        )}
      </Box>

      <Box className="sortsec">
        <Select
          width="200px"
          border="none"
          color="grey"
          onChange={handlechange}
          placeholder="Sort by"
          height={6}
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </Select>

        {!showSidebarButton && (
          <Pagination
            count={count}
            currentPage={page}
            updateCurrentPage={updateCurrentPage}
          />
        )}
      </Box>

      <Box />
    </Flex>
  );
};

export default Header;
