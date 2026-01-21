import { useToast } from "@chakra-ui/react";

export function useError() {
  const toast = useToast();
  function handleError(error: Error) {
    console.log({ error });
    toast({
      title: "Error",
      description: "Something went wrong",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }

  return { handleError };
}
