import { Boxes } from "lucide-react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Box,
  Flex,
  Text
} from "@chakra-ui/react";
import WidgetLayout from "./WidgetLayout";
import { v4 } from "uuid";
import Item from "@/../public/InventoryItem.png"
import Image from "next/image";

export default function Inventory({ ...style }) {
  const siteAData = [
    {
      name: "item 1",
      dimension: "10x20x40",
      weight: 1.5
    },
    {
      name: "item 2",
      dimension: "10x20x40",
      weight: 2.5
    },
    {
      name: "item 3",
      dimension: "10x20x40",
      weight: 3.5
    },
    {
      name: "item 4",
      dimension: "10x20x40",
      weight: 4.5
    },
  ]

  return (
    <WidgetLayout icon={<Boxes />} title={"Inventory"} {...style}>
      <Tabs variant="unstyled" defaultIndex={0}>
        <TabList color="white" bg="#31aaa8" h={'50px'}>
          <Tab _focus={{ bg: "#7ED7D6" }}>Site A</Tab>
          <Tab _focus={{ bg: "#7ED7D6" }}>Site B</Tab>
          <Tab _focus={{ bg: "#7ED7D6" }}>Missing</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="#3ef5f2"
          borderRadius="1px"
        />

        <TabPanels bg="#54cbc9">
          <TabPanel overflowY="scroll" maxHeight="22vh" py={0}>
            {siteAData.map((data) => (
              <Box py={2} borderBottomWidth="1px" overflow="hidden" w={'full'} h={'70px'} key={v4()} display={'flex'} flexDir={'row'} gap={2} color={'white'}>
                <Image src={Item} alt="item image" />
                <Flex flexDir="column" justifyContent={"space-between"}>
                  <Text fontSize={"medium"} fontWeight={'semibold'}>{data.name}</Text>
                  <Flex gap={3} dir="row">
                    <Text fontSize={"small"}>{data.dimension}</Text>
                    <Text fontSize={"small"}>{data.weight}kg</Text>
                  </Flex>
                </Flex>
              </Box>
            ))}
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </WidgetLayout>
  );
}
