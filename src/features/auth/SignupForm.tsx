import * as React from "react";

import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, PhoneIcon } from "@chakra-ui/icons";

export const SignupForm: React.FC = () => {
  return (
    <Stack>
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <InputGroup>
          <Input type="text" placeholder="First Last" />
        </InputGroup>
      </FormControl>
      <FormControl id="phone">
        <FormLabel>Phone Number</FormLabel>
        <InputGroup>
          <InputLeftElement children={<PhoneIcon />} />
          <Input type="tel" placeholder="(314) 555-1234" />
        </InputGroup>
      </FormControl>
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
