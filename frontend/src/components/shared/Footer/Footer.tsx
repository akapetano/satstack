import { Box, Container, Flex, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      as="footer"
      w="full"
      borderTop="1px solid"
      borderColor="border"
      py="6"
      mt="auto"
    >
      <Container maxWidth="breakpoint-xl">
        <Flex justify="space-between" align="center" gap={4}>
          <Text fontSize="sm" color="fg.muted">
            © {new Date().getFullYear()} Satstack
          </Text>
          <Flex gap="4">
            <Text fontSize="sm" color="fg.muted">
              Privacy Policy
            </Text>
            <Text fontSize="sm" color="fg.muted">
              Terms of Service
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
