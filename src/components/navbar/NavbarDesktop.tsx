import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import {
  Container,
  Flex,
  Stack,
  Button,
  StackDivider,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";

import { LoginPopover } from "../../features/auth/LoginPopover";

export const NavbarDesktop: React.FC = () => {
  return (
    <Container
      as={Stack}
      d={{ base: "none", md: "flex" }}
      maxW="6x1"
      py={4}
      spacing={4}
    >
      <Flex>
        <HStack spacing={3} divider={<StackDivider />} as="nav">
          <Link to="/">
            <Text fontSize="xl">Home</Text>
          </Link>
          <Link to="/about">
            <Text fontSize="xl">About</Text>
          </Link>
        </HStack>
        <Spacer />
        <LoginPopover />
      </Flex>
    </Container>
  );
};
