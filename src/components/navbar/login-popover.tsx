import * as React from "react";

import {
  Button,
  Stack,
  InputGroup,
  Input,
  InputLeftElement,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

export const LoginPopover: React.FC = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Login</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>Credentials</PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Stack>
            <InputGroup>
              <InputLeftElement children={<EmailIcon />} />
              <Input type="email" placeholder="Email" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement children={<LockIcon />} />
              <Input type="password" placeholder="Password" />
            </InputGroup>
          </Stack>
        </PopoverBody>
        <PopoverFooter>
          <Button>Submit</Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
