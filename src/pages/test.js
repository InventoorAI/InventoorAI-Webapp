import { Camera } from "lucide-react";
import WidgetLayout from "@/components/WidgetLayout";
import { HStack, Box } from "@chakra-ui/react";

export default function Test() {
  const printAnything = () => {
    console.log("testing tbh");
  };

  return (
    <HStack
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      w="100%"
      p="100px"
      gap="10px"
    >
      <WidgetLayout icon={<Camera />} title={"Cat"} w="100%">
        <Box bg="red">I love cat</Box>
      </WidgetLayout>
      <WidgetLayout
        icon={<Camera />}
        title={"Dog"}
        setting={printAnything}
        w="100%"
      >
        I love dog too
      </WidgetLayout>
    </HStack>
  );
}
