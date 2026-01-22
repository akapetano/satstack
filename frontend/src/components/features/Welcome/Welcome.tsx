import { Button, Flex, HStack, VStack } from "@chakra-ui/react";
import { SatCard } from "@/components/core/SatCard/SatCard";
import { WelcomeText } from "@/components/features/Welcome/components/WelcomeText";

export function Welcome() {
  return (
    <Flex
      direction="column"
      gap="4"
      justifyContent="center"
      alignItems="center"
      pt="10"
    >
      <HStack>
        <VStack>
          <WelcomeText />
          <Button>Click me</Button>
        </VStack>
        <SatCard />
      </HStack>
    </Flex>
  );
}
