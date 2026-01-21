import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  Text,
  Divider,
  Flex,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";
import { Coin } from "../../../../../../types/coins";

interface IAllTransactionsModalProps {
  coin: Coin;
  isOpen: boolean;
  onClose: () => void;
}

export const AllTransactionsModal = ({
  coin,
  isOpen,
  onClose,
}: IAllTransactionsModalProps) => {
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader mb="0">
          <Heading fontSize="2xl" m="0">
            All Transactions
          </Heading>
        </ModalHeader>
        <Divider />
        <ModalBody p="0.5rem">
          <Flex justifyContent="between">
            {/* <Image
              loader={() => coin.image}
              src={coin.image}
              alt={coin.name}
              height="30px"
              width="30px"
              unoptimized
            /> */}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
