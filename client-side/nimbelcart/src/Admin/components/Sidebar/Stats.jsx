import { Box, Text } from "@chakra-ui/layout";
import { ProgressCircle } from "../ProgressCircle";

export const Stats = ({ title, subtitle, icon, progress, increase }) => {
  
    return (
      <Box width="100%" m="0 30px">
        <Box display="flex" justifyContent="space-between">
          <Box>
            {icon}
            <Text
              variant="h4"
              fontWeight="bold"
              color={"gray.400"}
            >
              {title}
            </Text>
          </Box>
          <Box>
            <ProgressCircle progress={progress} />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" mt="2px">
          <Text variant="h5"color={"green.500"}>
            {subtitle}
          </Text>
          <Text
            variant="h5"
            fontStyle="italic"
           color={"green.600"}
          >
            {increase}
          </Text>
        </Box>
      </Box>
    );
  };
  
