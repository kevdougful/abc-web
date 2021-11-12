import { useState } from "react";

export const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  return [
    value,
    {
      // bind
      value,
      onChange: (event: any) => {
        setValue(event.target.value);
      },
    },
  ];
};
