import * as React from "react";
import { useAppDispatch } from "../../store";
import { setCredentials } from "./slice";

import { Auth } from "@aws-amplify/auth";

import {
  HStack,
  Spacer,
  Stack,
  Button,
  Link,
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
import { FormView } from "./LoginPopover";
import { AuthFormProps } from "./formInputProps";
import { FormInput } from "./FormInput";

export const SignupForm = (props: AuthFormProps) => {
  const [name, bindName] = useInput("");
  const [phone, bindPhone] = useInput("");
  const [email, bindEmail] = useInput("");
  const [password, bindPassword] = useInput("");
  const dispatch = useAppDispatch();

  const signup = async () => {
    const { user } = await Auth.signUp({
      username: email,
      password: password,
      attributes: {
        name: name,
        // phone_number: phone,
      },
    });
    console.log(user);
    props.usernameSetter(user.getUsername());
    props.viewSetter(FormView.CONFIRM);
    // console.log(result);
    // dispatch(setCredentials(result));
  };

  return (
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
          <Link onClick={() => props.viewSetter(FormView.LOGIN)}>
            Login Instead
          </Link>
          <Spacer />
          <Button
            onClick={signup}
            variant="solid"
            rightIcon={<ArrowForwardIcon />}
          >
            Sign Up
          </Button>
        </HStack>
      </PopoverFooter>
    </PopoverContent>
  );
};
