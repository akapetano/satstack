import { Container, type ContainerProps } from "@chakra-ui/react";

export const PageLayout = (props: ContainerProps) => {
  return (
    <Container
      maxWidth="breakpoint-xl"
      display="flex"
      flexDirection="column"
      flex="1"
      {...props}
    />
  );
};
