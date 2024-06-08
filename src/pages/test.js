import Copilot from "@/components/Copilot";
import { HStack, Box } from "@chakra-ui/react";
import Humidity from "@/components/Humidity";

export default function Test() {
  return (
    <HStack
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      w="100%"
      p="100px"
      gap="10px"
    >
      <Humidity />
    </HStack>
  );
}
