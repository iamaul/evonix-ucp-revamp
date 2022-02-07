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

import { ROUTES } from "@/config/env";

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
                <MobileMenuItem href={ROUTES.home.path} label="Home" />
                <MobileMenuItem href={ROUTES.server.path} label="Server" />
                <MobileMenuItem href={ROUTES.posts.path} label="Posts" />
                <MobileMenuItem
                  href={ROUTES.contentCreator.path}
                  label="Content Creator"
                />
                <SimpleGrid columns={2} spacing={2} w="100%">
                  <MobileMenuItem
                    href={ROUTES.help.client.path}
                    label="Client Version"
                  />
                  <MobileMenuItem href={ROUTES.help.faq.path} label="F.A.Q" />
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
