import { IconButton, useColorMode, Tooltip } from "@chakra-ui/react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import useSound from "use-sound";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [playSound] = useSound("/static/sounds/switch-on.mp3");

  return (
    <Tooltip
      label={colorMode === "dark" ? "Light mode" : "Dark mode"}
      aria-label="A tooltip"
    >
      <IconButton
        aria-label="theme toggle"
        icon={colorMode === "light" ? <RiMoonFill /> : <RiSunLine />}
        onClick={() => {
          toggleColorMode();
          playSound();
        }}
      />
    </Tooltip>
  );
};

export default ThemeToggle;
