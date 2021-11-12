import * as React from "react";

import {
  Button,
  Stack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ArrowForwardIcon } from "@chakra-ui/icons";

export const LoginPopover: React.FC = () => {
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    if (user) {
    }
  });

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
        </PopoverBody>
        <PopoverFooter>
          <HStack justify="right">
            <Button variant="solid" rightIcon={<ArrowForwardIcon />}>
              Submit
            </Button>
          </HStack>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
