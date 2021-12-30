import {
  VStack,
  Text,
  useColorModeValue,
  Icon,
  IconProps,
} from "@chakra-ui/react";

type MobileMenuButtonProps = {
  label: string;
  icon: IconProps;
  onClick?: VoidFunction;
};

const MobileMenuButton = ({
  label,
  icon,
  onClick,
  ...rest
}: MobileMenuButtonProps) => {
  return (
    <VStack
      as="button"
      spacing={0}
      rounded="md"
      px={6}
      color={useColorModeValue("black", "white")}
      onClick={onClick}
      {...rest}
    >
      <Icon>{icon}</Icon>

      <Text
        fontSize="xs"
        fontWeight="500"
        color={useColorModeValue("neutral.200", "neutral.200")}
      >
        {label}
      </Text>
    </VStack>
  );
};

export default MobileMenuButton;
