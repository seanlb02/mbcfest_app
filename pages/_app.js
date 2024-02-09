import "@/styles/globals.css";
import Context from "../context/context";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Context>
        <Component {...pageProps} />
      </Context>
    </ChakraProvider>
  );
}
