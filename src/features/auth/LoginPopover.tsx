import * as React from "react";

import {
  Link,
  Button,
  Stack,
  HStack,
  Popover,
  PopoverTrigger,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

export const LoginPopover: React.FC = () => {
  const [showSignup, setShowSignup] = React.useState(false);

  const toggleForm = (event: any) => setShowSignup(!showSignup);

  return (
    <Popover>
      <PopoverTrigger>
        <Button>Login</Button>
      </PopoverTrigger>
      {showSignup ? (
        <SignupForm toggler={toggleForm} />
      ) : (
        <LoginForm toggler={toggleForm} />
      )}
    </Popover>
  );
};
