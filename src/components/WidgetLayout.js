import { Settings } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export default function WidgetLayout({
  icon,
  title,
  children,
  setting,
  ...style
}) {
  return (
    <Accordion allowMultiple {...style} bg="white" borderWidth={0}>
      <AccordionItem>
        <h2>
          <AccordionButton>
            {icon}
            <Box as="span" flex="1" textAlign="left" pl="10px">
              {title}
            </Box>
            <Box
              transition="color 0.2s"
              _hover={{
                color: "#54cbc9",
              }}
              pr="10px"
            >
              {setting !== undefined && <Settings onClick={setting} />}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel p="0">{children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
