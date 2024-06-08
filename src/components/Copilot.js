import {
  Flex,
  Input,
  HStack,
  Box,
  InputGroup,
  InputRightAddon,
  Center,
} from "@chakra-ui/react";
import { BotMessageSquare, SendHorizonal } from "lucide-react";
import WidgetLayout from "./WidgetLayout";
import Message from "./Message";

export default function Copilot({ ...style }) {
  const messages = [
    { who: "human", msg: "Hello." },
    { who: "ai", msg: "Hello John Doe! How may I help you today?" },
    { who: "human", msg: "How's my inventory?" },
    {
      who: "ai",
      msg: "Everything looks good. The temperature is 30°C, which is within the appropriate range. The humidity is slightly above average. Site A is 85% full, with Item 1 taking up the majority of space.",
    },
    { who: "human", msg: "Would you like me to do anything else?" },
    {
      who: "ai",
      msg: "That's great. Could you please move Item 1 from Site A back to Site B?",
    },
    { who: "human", msg: "Moving Item 1 using Robot 1." },
  ];

  return (
    <WidgetLayout title={"Copilot"} icon={<BotMessageSquare />} {...style}>
      <Box bg="#54cbc9">
        <Flex
          gap="11px"
          direction={"column"}
          px="10px"
          py="20px"
          h="500px"
          w="100%"
          overflowY={"scroll"}
          id="scrollbar"
        >
          {messages.map((msg) => (
            <Message who={msg.who} message={msg.msg} />
          ))}
        </Flex>
        <InputGroup pb="10px" pt="0" px="20px">
          <Input
            bg="white"
            _hover={{
              borderColor: "none",
            }}
            _focusVisible={{
              borderColor: "none",
            }}
            p="10px"
          />
          <InputRightAddon
            bg="#edf2f7"
            transition="all 0.2s"
            _hover={{
              backgroundColor: "#d9fffd",
              cursor: "pointer",
            }}
          >
            <Center>
              <SendHorizonal color="#2f9694" />
            </Center>
          </InputRightAddon>
        </InputGroup>
      </Box>
    </WidgetLayout>
  );
}
