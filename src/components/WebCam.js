import { Camera } from "lucide-react";
import WidgetLayout from "./WidgetLayout";
import { io } from "socket.io-client";
import { useEffect } from "react";

export default function WebCam({ ...style }) {
//  useEffect(() => {
//    const socket = io(process.env.NEXT_PUBLIC_WEBSOCKET_URL)
//
//    socket.on('mjpeg-stream', (chunk) => {
//      const img = document.getElementById('mjpeg-stream');
//      console.log('chunk', chunk);
//
//      const reader = new FileReader();
//
//      reader.onloadend = () => {
//        img.src = reader.result;
//      };
//      reader.readAsDataURL(new Blob([chunk]));
//    });
//  }, [])

  return (
    <WidgetLayout title={"Web Cam"} icon={<Camera />} {...style}>
      <img id="mjpeg-stream" width="400px" height="250px" />
    </WidgetLayout>
  );
}
