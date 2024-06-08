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
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "Package", icon: Package, href: "#" },
  { name: "Console", icon: Terminal, href: "#" },
];

export default function SimpleSidebar({ children }) {
  return (
    <Box bgColor={"#00AFAC"} minH="100vh" display={'flex'} flexDir={'row'}>
      <SidebarContent display={{ base: "none", md: "block" }} />
      {/* mobilenav */}
      <MobileNav display={{ base: "none", md: "none" }} />
      <Box mt={5} w="full" display="flex" justifyContent="center" p={5}>
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
        <NavItem key={link.name} icon={link.icon} href={link.href} />
      ))}
    </Flex>
  );
};

const NavItem = ({ icon, href }) => {
  return (
    <Link
      href={href}
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
};
