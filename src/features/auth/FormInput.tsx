import * as React from "react";

import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

interface FormInputProps {
  id: string;
  label: string;
  icon: any | undefined | null;
  type: string;
  placeholder: string;
  bind: object;
}

export const FormInput = (props: FormInputProps) => {
  return (
    <FormControl id={props.id}>
      <FormLabel>{props.label}</FormLabel>
      <InputGroup>
        <InputLeftElement children={props.icon} />
        <Input
          type={props.type}
          placeholder={props.placeholder}
          {...props.bind}
        />
      </InputGroup>
    </FormControl>
  );
};
