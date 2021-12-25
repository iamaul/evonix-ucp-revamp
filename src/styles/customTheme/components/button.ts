import { DeepPartial, Theme } from "@chakra-ui/react";

const Button: DeepPartial<Theme["components"]["Button"]> = {
  baseStyle: {
    fontWeight: "500",
    rounded: "md",
    borderRadius: "1rem",
  },
};

export default Button;
