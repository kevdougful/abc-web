import * as React from "react";

import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

export const LoginForm: React.FC = () => {
  return (
    <Stack>
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <InputGroup>
          <InputLeftElement children={<EmailIcon />} />
          <Input type="email" placeholder="user@example.com" />
        </InputGroup>
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <InputLeftElement children={<LockIcon />} />
          <Input type="password" placeholder="password" />
        </InputGroup>
      </FormControl>
    </Stack>
  );
};
