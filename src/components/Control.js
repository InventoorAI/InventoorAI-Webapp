import {
  HStack,
  Text,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  IconButton,
  Button,
} from "@chakra-ui/react"
import WidgetLayout from "./WidgetLayout"
import { Joystick, ArrowBigLeft, ArrowBigUp, ArrowBigDown, ArrowBigRight } from "lucide-react"
import { useState } from "react"

export default function Control({ ...style }) {
  return (
    <WidgetLayout title={"Control"} icon={<Joystick />} {...style}>
      <VStack bg="#54CBC9" gap="24px" w="full" py={3}>
        <NumberInputRow />
        <MovementRow />
        <SpeedFactorRow />
      </VStack>
    </WidgetLayout>
  )
}

function NumberInputRow() {
  return (
    <HStack w="full" justifyContent="space-between" px="13px">
      <VStack justifyContent="start" w="auto">
        <Text color="white">x</Text>
        <NumberInput bg="white" w="100px">
          <NumberInputField />
          <NumberInputStepper w="24px">
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </VStack>
      <VStack justifyContent="start" w="auto">
        <Text color="white">y</Text>
        <NumberInput bg="white" w="100px">
          <NumberInputField />
          <NumberInputStepper w="24px">
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </VStack>
      <VStack justifyContent="start" w="auto">
        <Text color="white">z</Text>
        <NumberInput bg="white" w="100px">
          <NumberInputField />
          <NumberInputStepper w="24px">
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </VStack>
    </HStack>
  )
}

function MovementRow() {
  return (
    <HStack w="full" justifyContent="space-between" px="13px" py="10px" borderBottom="1px solid white">
      <Box>
        <HStack>
          <IconButton as={ArrowBigLeft} bg="#319795" color="white" />
          <VStack>
            <IconButton as={ArrowBigUp} bg="#319795" color="white" />
            <IconButton as={ArrowBigDown} bg="#319795" color="white" />
          </VStack>
          <IconButton as={ArrowBigRight} bg="#319795" color="white" />
        </HStack>
      </Box>
      <VStack>
        <Button bg="#319795" color="white" fontWeight="semibold">Site A</Button>
        <Button bg="#319795" color="white" fontWeight="semibold">Site B</Button>
      </VStack>
    </HStack>
  )
}

function SpeedFactorRow() {
  const [value, setValue] = useState()

  return (
    <VStack w="full" justifyContent="space-between" px="13px">
      <HStack w="full" justifyContent="space-between">
        <Text fontSize="medium" color="white">Speed Factor</Text>
        <NumberInput bg="white" w="100px" defaultValue={100} onChange={(e) => setValue(e)} value={value}>
          <NumberInputField />
          <NumberInputStepper w="24px">
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </HStack>
      <Slider defaultValue={100} min={0} max={200} onChange={(e) => setValue(e)} value={value}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </VStack>
  )
}
