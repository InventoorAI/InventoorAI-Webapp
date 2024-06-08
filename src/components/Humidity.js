import { Droplet } from "lucide-react";
import { Chart } from "./Chart";
import WidgetLayout from "./WidgetLayout";
import { Box } from "@chakra-ui/react";

export default function Humidity({ ...style }) {
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        label: "Humidity",
        data: [1, 2, 3, 4, 3, 2, 1, 3, 4, 5],
        borderColor: "#00afac",
        backgroundColor: "#54cbc9",
      },
    ],
  };

  return (
    <WidgetLayout title={"Humidity"} icon={<Droplet />} {...style}>
      <Box p={5}>
        <Chart data={data} />
      </Box>
    </WidgetLayout>
  );
}
