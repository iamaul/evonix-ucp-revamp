import {
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Tooltip,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

import MobileMenuButton from "./MobileMenuButton";
import MobileMenuItem from "./MobileMenuItem";

type MobileMenuToggleProps = {
  mobile?: VoidFunction | undefined;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MobileMenuToggle = ({ mobile }: MobileMenuToggleProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Tooltip>
        <MobileMenuButton
          label="Menu"
          icon={<GiHamburgerMenu />}
          onClick={onOpen}
        />
      </Tooltip>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent
            borderTopRadius="6px"
            bg={useColorModeValue("gray.50", "warmGray.900")}
          >
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody pb={4}>
              <VStack>
                <MobileMenuItem href="/" label="Home" />
                <MobileMenuItem href="/server" label="Server" />
                <MobileMenuItem href="/posts" label="Posts" />
                <MobileMenuItem
                  href="/content-creator"
                  label="Content Creator"
                />
                <SimpleGrid columns={2} spacing={2} w="100%">
                  <MobileMenuItem href="/client" label="Client Version" />
                  <MobileMenuItem href="/faq" label="F.A.Q" />
                </SimpleGrid>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default MobileMenuToggle;
