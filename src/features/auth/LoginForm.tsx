import * as React from "react";
import { useAppDispatch } from "../../store";
import { setCredentials } from "./slice";

import { Auth } from "@aws-amplify/auth";

import {
  HStack,
  Stack,
  Button,
  Link,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { AtSignIcon, LockIcon, ArrowForwardIcon } from "@chakra-ui/icons";

import { useInput } from "../../hooks";
import { AuthFormProps } from "./formInputProps";
import { FormInput } from "./FormInput";

export const LoginForm = (props: AuthFormProps) => {
  const [email, bindEmail] = useInput("");
  const [password, bindPassword] = useInput("");

  const login = async () => {
    const result = await Auth.signIn(email, password);
    console.log(result);
  };

  return (
    <PopoverContent>
      <PopoverArrow />
      <PopoverBody>
        <Stack>
          <PopoverCloseButton />
          <FormInput
            id="email"
            label="Email"
            icon={<AtSignIcon />}
            type="text"
            placeholder="user@example.com"
            bind={bindEmail}
          />
          <FormInput
            id="password"
            label="Password"
            icon={<LockIcon />}
            type="password"
            placeholder="password"
            bind={bindPassword}
          />
        </Stack>
      </PopoverBody>
      <PopoverFooter>
        <HStack justify="right">
          <Link onClick={props.toggler}>Sign Up</Link>
          <Button
            onClick={login}
            variant="solid"
            rightIcon={<ArrowForwardIcon />}
          >
            Submit
          </Button>
        </HStack>
      </PopoverFooter>
    </PopoverContent>
  );
};
