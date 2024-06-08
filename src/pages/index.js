import Head from "next/head";
import WithSubnavigation from "@/components/navbar";
import SimpleSidebar from "@/components/sidebar";
import Copilot from "@/components/Copilot";
import { Flex, VStack } from "@chakra-ui/react";
import Humidity from "@/components/Humidity";
import Temperature from "@/components/Temperature";
import WebCam from "@/components/WebCam";
import Inventory from "@/components/Inventory";
import Control from "@/components/Control";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inventoor Dashboard</title>
        <meta name="description" content="Inventoor Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WithSubnavigation />
      <SimpleSidebar>
        <Flex gap="10px">
          <VStack w="400px">
            <Inventory w="100%" />
            <Control w="400px" />
          </VStack>
          <VStack w="400px">
            <WebCam w="100%" />
            <Temperature w="100%" />
            <Humidity w="100%" />
          </VStack>
          <VStack w="500px">
            <Copilot w="100%" />
          </VStack>
        </Flex>
      </SimpleSidebar>
    </>
  );
}
