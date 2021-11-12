import * as React from "react";

import {
  Box,
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
import { ConfirmForm } from "./ConfirmForm";

export enum FormView {
  LOGIN,
  SIGNUP,
  CONFIRM,
}

export const LoginPopover: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [view, setView] = React.useState(FormView.LOGIN);

  return (
    <Popover>
      <PopoverTrigger>
        <Button>Login</Button>
      </PopoverTrigger>
      {view === FormView.LOGIN ? (
        <LoginForm viewSetter={setView} usernameSetter={setUsername} />
      ) : null}
      {view === FormView.SIGNUP ? (
        <SignupForm viewSetter={setView} usernameSetter={setUsername} />
      ) : null}
      {view === FormView.CONFIRM ? <ConfirmForm username={username} /> : null}
    </Popover>
  );
};
