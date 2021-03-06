import {
  Box,
  VStack,
  Button,
  Heading,
  Icon,
  Text,
  LightMode,
  AspectRatio,
  Grid,
  Divider,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import ReactPlayer from "react-player/youtube";

import PageTransition from "@/components/common/PageTransitions";
import Section from "@/components/common/Section";
// eslint-disable-next-line import/extensions
import Layout from "@/components/layout";
import RecentPosts from "@/components/posts/recent";
import Stats from "@/components/stats";
// eslint-disable-next-line import/extensions
import siteConfig from "~/site.config";

const HOME_SOCIAL_BUTTONS: [string, string, IconType, string][] = [
  ["Discord", siteConfig.socials.Discord, FaDiscord, "blue"],
  ["Facebook", siteConfig.socials.Facebook, FaFacebook, "facebook"],
  ["Instagram", siteConfig.socials.Instagram, FaInstagram, "red"],
  ["Twitter", siteConfig.socials.Twitter, FaTwitter, "twitter"],
];

const Home = () => {
  return (
    <Layout>
      <Box mt={10}>
        <PageTransition>
          <VStack spacing={12}>
            <Section>
              <VStack spacing={4} align="start" fontSize="2xl">
                <Box>
                  <Heading size="xl">EvoniX Roleplay</Heading>
                  <Heading size="sm" fontWeight="light">
                    When community comes unity
                  </Heading>
                </Box>

                <VStack w="100%" align="left" spacing={6}>
                  <AspectRatio
                    overflow="hidden"
                    rounded="md"
                    boxShadow="lg"
                    my={6}
                    ratio={16 / 9}
                  >
                    <ReactPlayer
                      width="100%"
                      height="100%"
                      url="https://youtu.be/Hfyp_vLZw-Y"
                      controls
                      playing
                    />
                  </AspectRatio>
                </VStack>

                <VStack>
                  <Text fontSize={["md", null, "sm"]} align="justify">
                    EvoniX Roleplay is an Indonesian gaming community for the
                    content lovers of Grand Theft Auto: San Andreas where we
                    focus on the San Andreas Multiplayer (SA-MP) community.
                    EvoniX Roleplay was founded in 2018, and since then our
                    community is growing up along with the development of our
                    SA-MP game mode.
                  </Text>
                </VStack>

                <LightMode>
                  <Grid
                    gap={{ base: 2, lg: 2 }}
                    templateColumns={{
                      base: "repeat(2, 1fr)",
                      md: "repeat(4, 1fr)",
                    }}
                    width={{ base: "100%", lg: "60%" }}
                  >
                    {HOME_SOCIAL_BUTTONS.map(
                      ([name, href, AsIcon, colorScheme]) => (
                        <Button
                          key={name}
                          as="a"
                          colorScheme={colorScheme}
                          href={href}
                          leftIcon={<Icon as={AsIcon} />}
                          size="xs"
                          target="_blank"
                        >
                          {name}
                        </Button>
                      )
                    )}
                  </Grid>
                </LightMode>
              </VStack>
            </Section>

            <Section>
              <Divider orientation="horizontal" mb={5} />
              <VStack align="start" spacing={4}>
                <Heading size="xl">We&apos;re growing, ????</Heading>
                <Text fontSize={["md", null, "sm"]} align="justify">
                  EvoniX is growing quickly. We&apos;re dedicated to serving and
                  improving the best experience of gaming community in
                  Indonesia.
                </Text>
                <Stats />
              </VStack>
            </Section>

            <Section>
              <Divider orientation="horizontal" mb={5} />
              <VStack align="start" spacing={4}>
                <Heading size="xl">Recent Posts</Heading>
                <RecentPosts />
              </VStack>
            </Section>
          </VStack>
        </PageTransition>
      </Box>
    </Layout>
  );
};

export default Home;
