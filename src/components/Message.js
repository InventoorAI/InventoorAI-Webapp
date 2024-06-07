import { Flex, Text, Box } from "@chakra-ui/react";
import { PackageOpen } from "lucide-react";
import { PersonStanding } from "lucide-react";

export default function Message({ who, message }) {
  return (
    <Flex
      justifyContent={who === "human" ? "flex-end" : "flex-start"}
      alignItems={who === "human" ? "flex-end" : "flex-start"}
      direction={"column"}
      gap="10px"
      pl={who === "human" ? "20%" : 0}
      pr={who !== "human" ? "20%" : 0}
    >
      <Box borderRadius="100%" bg="white" p="5px">
        {who === "human" ? <PersonStanding /> : <PackageOpen />}
      </Box>
      <Text
        bg="white"
        p="10px"
        borderTopRadius="10px"
        borderBottomRightRadius={who === "human" ? "0" : "10px"}
        borderBottomLeftRadius={who !== "human" ? "0" : "10px"}
      >
        {message}
      </Text>
    </Flex>
  );
}
