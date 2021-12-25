import { extendTheme } from "@chakra-ui/react";

import colors from "@/styles/customTheme/colors";
import Button from "@/styles/customTheme/components/button";
import config from "@/styles/customTheme/config";
import fonts from "@/styles/customTheme/fonts";
import styles from "@/styles/customTheme/styles";

const customTheme = extendTheme({
  config,
  styles,
  fonts,
  colors,
  components: {
    Button,
  },
});

export default customTheme;
