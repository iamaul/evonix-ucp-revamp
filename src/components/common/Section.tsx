import { Center } from "@chakra-ui/react";
import React from "react";

import Container from "@/components/common/Container";

type SectionProps = {
  full?: boolean;
  children?: React.ReactNode;
};

const Section = ({ full, children, ...rest }: SectionProps) => {
  return (
    <Center as="section" {...rest} w="100%">
      {full ? children : <Container>{children}</Container>}
    </Center>
  );
};

export default Section;
