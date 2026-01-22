import { Heading, VStack } from "@chakra-ui/react";

export const WelcomeText = () => {
  return (
    <VStack gap="4">
      <Heading
        as="h2"
        fontSize={["2xl", "3xl", "4xl", "5xl", "5xl"]}
        textAlign="center"
        maxW="md"
        lineHeight="1.2"
      >
        Your Journey To Financial Freedom Starts Here.
      </Heading>
    </VStack>
  );
};
