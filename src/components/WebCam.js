import { Camera } from "lucide-react";
import WidgetLayout from "./WidgetLayout";

export default function WebCam({ ...style }) {
  return (
    <WidgetLayout title={"Web Cam"} icon={<Camera />} {...style}>
      <img src="http://192.168.31.60/webcam/stream" />
    </WidgetLayout>
  );
}
