import { Box } from "@chakra-ui/layout";
export const ProgressCircle = ({ progress = "0.75", size = "40" }) => {

 
  const angle = progress * 360;
  return (
    <Box bg={"red.500"}
      sx={{
        background: `radial-gradient(${"red"} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${"blue"} ${angle}deg 360deg),
            ${"green"}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    ></Box>
  );
};

