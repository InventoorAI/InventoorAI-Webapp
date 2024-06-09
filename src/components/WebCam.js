import { Camera } from "lucide-react";
import WidgetLayout from "./WidgetLayout";
import { Socket, io } from "socket.io-client";
import { useEffect } from "react";
import { Button } from "@chakra-ui/react";

const socket = io(`ws://${process.env.NEXT_PUBLIC_DOMAIN}:3000`)
export default function WebCam({ ...style }) {

  useEffect(() => {

    socket.on('mjpeg-stream', (chunk) => {
      const img = document.getElementById('mjpeg-stream');
      console.log('chunk', chunk);

      const reader = new FileReader();

      reader.onloadend = () => {
        img.src = reader.result;
      };
      reader.readAsDataURL(new Blob([chunk]));
    });
  }, [])
  const closeConn = () => {
    socket.disconnect()
  }
  const startConn = () => {
    socket.emit('mjpeg-stream', { action: "start"})
  }

  return (
    <WidgetLayout title={"Web Cam"} icon={<Camera />} {...style}>
      <img id="mjpeg-stream" width="400px" height="250px" />
      <Button position="absolute" bottom={0} right={0} bg="#31aaa8" onClick={closeConn}>pause</Button>
      <Button position="absolute" bottom={0} right={24} bg="#31aaa8" onClick={startConn}>play</Button>
    </WidgetLayout>
  );
}
