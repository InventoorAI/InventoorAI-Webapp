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
import { v4 } from "uuid";
import { useState, useEffect } from "react";

export default function Copilot({ ...style }) {
  const[messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { role: "user", context: input.trim() };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const response = await fetch("http://192.168.145.49:8000/testgpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages,
        }),
      });

      const data = await response.json();
      setMessages((prevMessages) => [...prevMessages, 
        {
          role: "asssistant",
          context: data.message,
        }
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <WidgetLayout title={"Copilot"} icon={<BotMessageSquare />} {...style}>
      <Box bg="#54cbc9">
        <Flex
          gap="11px"
          direction={"column"}
          px="20px"
          py="20px"
          h="595px"
          w="100%"
          overflowY={"scroll"}
          id="scrollbar"
        >
          {messages.map((msg) => (
            <Message key={v4()} who={msg.role} message={msg.context} />
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
            onChange={(e) => setInput(e.target.value)}
          />
          <InputRightAddon
            bg="#edf2f7"
            transition="all 0.2s"
            _hover={{
              backgroundColor: "#d9fffd",
              cursor: "pointer",
            }}
            onClick={handleSendMessage}
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
