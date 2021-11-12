import { FormView } from "./LoginPopover";

export type AuthFormProps = {
  viewSetter: (view: FormView) => void;
  usernameSetter: (username: string) => void;
};
