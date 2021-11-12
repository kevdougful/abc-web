import * as React from "react";
import { useAppDispatch } from "../../store";
import { setCredentials } from "./slice";

import { Auth } from "@aws-amplify/auth";

import {
  HStack,
  Spacer,
  Stack,
  Button,
  Text,
  Link,
  PinInput,
  PinInputField,
  Input,
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

interface ConfirmFormProps {
  username: string;
}

export const ConfirmForm = (props: ConfirmFormProps) => {
  const [code, bindCode] = useInput("");

  const confirm = async () => {
    await Auth.confirmSignUp(props.username, code);
  };

  return (
    // TODO: Make this look prettier
    <PopoverContent>
      <PopoverBody>
        <Stack spacing={2} align="center">
          <Text fontSize="md" noOfLines={2}>
            Check your {props.username} email for a confirmation code
          </Text>
          <Input variant="outline" size="lg" {...bindCode} />
          <Button onClick={() => confirm()}>Confirm</Button>
        </Stack>
      </PopoverBody>
    </PopoverContent>
  );
};
