import * as React from "react";

import {
  Link,
  Button,
  Stack,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

export const LoginPopover: React.FC = () => {
  const [showSignup, setShowSignup] = React.useState(false);

  const toggleForm = () => setShowSignup(!showSignup);

  return (
    <Popover>
      <PopoverTrigger>
        <Button>Login</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <Stack>
            <PopoverCloseButton />
            {showSignup ? <SignupForm /> : <LoginForm />}
          </Stack>
        </PopoverBody>
        <PopoverFooter>
          <HStack justify="right">
            <Link onClick={() => toggleForm()}>
              {showSignup ? "Login" : "Sign Up"}
            </Link>
            <Button variant="solid" rightIcon={<ArrowForwardIcon />}>
              {showSignup ? "Sign Up" : "Submit"}
            </Button>
          </HStack>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
