import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import {
  Container,
  Stack,
  Button,
  Divider,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";

import { Home, About } from "../../pages";

export const NavbarDesktop: React.FC = () => {
  return (
    <Container
      as={Stack}
      d={{ base: "none", md: "flex" }}
      maxW="6x1"
      py={4}
      spacing={4}
    >
      <HStack>
        <Link to="/">
          <Text fontSize="xl">Home</Text>
        </Link>
        <Link to="/about">
          <Text fontSize="xl">About</Text>
        </Link>
      </HStack>
    </Container>
  );
};
