import { Thermometer } from "lucide-react";
import { Chart } from "./Chart";
import WidgetLayout from "./WidgetLayout";
import { Box } from "@chakra-ui/react";

export default function Temperature({ ...style }) {
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        label: "Temperature",
        data: [4, 2, 1, 4, 3, 3, 2, 2, 1, 5],
        borderColor: "#00afac",
        backgroundColor: "#54cbc9",
      },
    ],
  };

  return (
    <WidgetLayout title={"Temperature"} icon={<Thermometer />} {...style}>
      <Box p={5}>
        <Chart data={data} />
      </Box>
    </WidgetLayout>
  );
}
