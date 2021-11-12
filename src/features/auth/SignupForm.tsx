import * as React from "react";

import {
  HStack,
  Stack,
  Button,
  Link,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import {
  AtSignIcon,
  ChatIcon,
  LockIcon,
  PhoneIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";

import { useInput } from "../../hooks";
import { AuthFormProps } from "./formInputProps";
import { FormInput } from "./FormInput";

export const SignupForm = (props: AuthFormProps) => {
  const [name, bindName] = useInput("");
  const [phone, bindPhone] = useInput("");
  const [email, bindEmail] = useInput("");
  const [password, bindPassword] = useInput("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert(`${email}:${password}:${name}:${phone}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <Stack>
            <PopoverCloseButton />
            <FormInput
              id="name"
              label="Name"
              icon={<ChatIcon />}
              type="text"
              placeholder="John Doe"
              bind={bindName}
            />
            <FormInput
              id="phone"
              label="Phone Number"
              icon={<PhoneIcon />}
              type="tel"
              placeholder="(314) 555-1234"
              bind={bindPhone}
            />
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
            <Link onClick={props.toggler}>Login</Link>
            <Button
              type="submit"
              variant="solid"
              rightIcon={<ArrowForwardIcon />}
            >
              Submit
            </Button>
          </HStack>
        </PopoverFooter>
      </PopoverContent>
    </form>
  );
};
