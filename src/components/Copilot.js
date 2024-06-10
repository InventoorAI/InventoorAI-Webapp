import {
  Flex,
  Input,
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
import { io } from "socket.io-client";

export default function Copilot({ ...style }) {
  const socket = io(`ws://${process.env.NEXT_PUBLIC_DOMAIN}:3000`);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    console.log("input", input);
    const newMessage = { role: "user", content: input.trim() };
    socket.emit("chat", { messages: [...messages, newMessage] });

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    // setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput("");
  };

  socket.on("chat", (message) => {
    const newMessage = { role: "assistant", content: message.message };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  });
  // useEffect(() => {
  // }, []);

  return (
    <WidgetLayout title={"Chatbot"} icon={<BotMessageSquare />} {...style}>
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
            <Message key={v4()} who={msg.role} message={msg.content} />
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
            value={input}
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
