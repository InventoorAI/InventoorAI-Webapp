import { Boxes } from "lucide-react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import WidgetLayout from "./WidgetLayout";

export default function Inventory({ ...style }) {
  return (
    <WidgetLayout icon={<Boxes />} title={"Inventory"} {...style}>
      <Tabs variant="unstyled">
        <TabList bg="#31aaa8" color="white">
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="#3ef5f2"
          borderRadius="1px"
        />

        <TabPanels bg="#54cbc9">
          <TabPanel>
            <p>one!</p>
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
