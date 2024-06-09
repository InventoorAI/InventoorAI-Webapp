import { Flex, Text, Box } from "@chakra-ui/react";
import { PackageOpen } from "lucide-react";
import { PersonStanding } from "lucide-react";

export default function Message({ who, message }) {
  return (
    <Flex
      justifyContent={who === "user" ? "flex-end" : "flex-start"}
      alignItems={who === "user" ? "flex-end" : "flex-start"}
      direction={"column"}
      gap="10px"
      pl={who === "user" ? "20%" : 0}
      pr={who !== "user" ? "20%" : 0}
    >
      <Box borderRadius="100%" bg="white" p="5px">
        {who === "user" ? <PersonStanding /> : <PackageOpen />}
      </Box>
      <Text
        bg="white"
        p="10px"
        borderTopRadius="10px"
        borderBottomRightRadius={who === "user" ? "0" : "10px"}
        borderBottomLeftRadius={who !== "user" ? "0" : "10px"}
      >
        {message}
      </Text>
    </Flex>
  );
}
