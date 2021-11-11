import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

export default () => {
  return (
    <ChakraProvider>
      <h1>Hello world</h1>
    </ChakraProvider>
  );
};
