import Control from "@/components/Control";
import { HStack, Box } from "@chakra-ui/react";

export default function Test() {
  return (
    <HStack
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      w="100%"
      p="100px"
      gap="10px"
    >
      <Control w="400px" />
    </HStack>
  );
}
