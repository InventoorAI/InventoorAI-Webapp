import "./global.css";
import { ChakraProvider } from "@chakra-ui/react";
import { fonts } from "../../lib/font";

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-nunito: ${fonts.nunito.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider>
        <Component {...pageProps} />;
      </ChakraProvider>
    </>
  );
}
