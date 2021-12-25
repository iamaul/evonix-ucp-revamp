import { IconButton, useColorMode, Tooltip } from "@chakra-ui/react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip
      label={colorMode === "dark" ? "Light mode" : "Dark mode"}
      aria-label="A tooltip"
    >
      <IconButton
        aria-label="theme toggle"
        icon={colorMode === "light" ? <RiMoonFill /> : <RiSunLine />}
        onClick={toggleColorMode}
      />
    </Tooltip>
  );
};

export default ThemeToggle;
