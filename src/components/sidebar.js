import React from "react";
import {
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Text,
} from "@chakra-ui/react";

import { LayoutDashboard, Package, Terminal } from "lucide-react";

const LinkItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Package", icon: Package },
  { name: "Console", icon: Terminal },
];

export default function SimpleSidebar({ children }) {
  return (
    <Box bgColor={"#00AFAC"} minH="100vh">
      <SidebarContent display={{ base: "none", md: "block" }} />
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} />
      <Box ml={20} p={5}>
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ ...rest }) => {
  return (
    <Flex
      bg={"#177472"}
      w={{ base: "full", md: 20 }}
      h="100vh"
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      {...rest}
    >
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} />
      ))}
    </Flex>
  );
};

const NavItem = ({ icon }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        justifyContent="center"
        p="4"
        borderRadius="lg"
        role="group"
        color="white"
        cursor="pointer"
        _hover={{
          bg: "rgba(255, 255, 255, 0.20)",
          color: "white",
          borderRadius: "none",
        }}
      >
        {icon && (
          <Icon
            fontSize="x-large"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      justifyContent="flex-start"
      {...rest}
    >
      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
