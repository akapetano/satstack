import { Box, Container, HStack } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/shared/ColorMode/components/ColorModeButton";

export const Header = () => {
  return (
    <Box as="header" w="full" shadow="md" py="2">
      <Container maxWidth="breakpoint-xl">
        <HStack justifyContent="space-between" alignItems="center">
          <Box
            fontWeight="bold"
            p="2"
            rounded="md"
            border="2px solid"
            borderColor="border"
          >
            Satstack
          </Box>
          <ColorModeButton />
        </HStack>
      </Container>
    </Box>
  );
};
