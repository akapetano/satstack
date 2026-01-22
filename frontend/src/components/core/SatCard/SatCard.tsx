import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { BsInfoCircle } from "react-icons/bs";
import { SiBitcoin } from "react-icons/si";

export const SatCard = () => {
  return (
    <Flex
      h={{ base: 150, md: 200 }}
      w={{ base: 280, md: 380 }}
      p={2}
      justifyContent={{ base: "center", md: "end" }}
      alignItems={{ base: "center", md: "start" }}
      flexDir="column"
      rounded="xl"
      background="rgba(65, 149, 71, 0.95)"
      borderRadius="10px"
      backgroundColor="#46be4a"
      backgroundImage="radial-gradient(at 32% 9%, hsla(27,61%,71%,1) 0px, transparent 50%), radial-gradient(at 84% 96%, hsla(172,72%,67%,1) 0px, transparent 50%), radial-gradient(at 15% 76%, hsla(153,97%,78%,1) 0px, transparent 50%), radial-gradient(at 41% 79%, hsla(89,92%,67%,1) 0px, transparent 50%), radial-gradient(at 62% 45%, hsla(98,81%,79%,1) 0px, transparent 50%), radial-gradient(at 46% 30%, hsla(118,85%,65%,1) 0px, transparent 50%), radial-gradient(at 92% 71%, hsla(104,83%,65%,1) 0px, transparent 50%), radial-gradient(at 70% 55%, hsla(138,83%,65%,1) 0px, transparent 50%), radial-gradient(at 84% 79%, hsla(128,83%,65%,1) 0px, transparent 50%)"
      boxShadow="0 8px 32px 8px rgba(70, 190, 74, .75)"
      color="gray.900"
      _dark={{
        backgroundColor: "#99f3ff",
        backgroundImage:
          "radial-gradient(at 17% 69%, hsla(101,67%,72%,1) 0px, transparent 50%),radial-gradient(at 86% 22%, hsla(134,62%,60%,1) 0px, transparent 50%),radial-gradient(at 11% 18%, hsla(91,90%,73%,1) 0px, transparent 50%), radial-gradient(at 80% 37%, hsla(143,85%,64%,1) 0px, transparent 50%), radial-gradient(at 48% 86%, hsla(123,77%,64%,1) 0px, transparent 50%), radial-gradient(at 53% 21%, hsla(254,61%,64%,1) 0px, transparent 50%),  radial-gradient(at 29% 42%, hsla(61,96%,60%,1) 0px, transparent 50%)",
        boxShadow: "0 8px 32px 8px rgba(46, 204, 113, .75)",
        color: "gray.800",
      }}
    >
      <Flex justifyContent="space-between" flexDir="column" w="full" h="full">
        <Flex justifyContent="space-between" alignItems="start">
          <Flex
            p="0.4rem"
            rounded="full"
            border="1px solid"
            justifyContent="center"
            alignItems="center"
          >
            <Icon fontSize={21}>
              <SiBitcoin />
            </Icon>
          </Flex>
          <Icon fontSize={17}>
            <BsInfoCircle />
          </Icon>
        </Flex>
        <Box p={2}>
          <Text fontWeight="light" fontSize="sm" opacity="0.9">
            Address
          </Text>
          <Text fontWeight="semi-bold" fontSize="xl" mt={1}>
            Satstack
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
