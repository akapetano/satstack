import NextLink from "next/link";
import {
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  useColorModeValue,
  TableProps,
  Text,
  Flex,
  MenuButton,
  Menu,
  MenuList,
  Icon,
  MenuItem,
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";
import Image from "next/image";
import { useCoins } from "../../../../../hooks/useCoins";
import { PortfolioCoin } from "../../../../../types/crypto";
import { Coin } from "../../../../../types/coins";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AllTransactionsModal } from "./AllTransactionsModal/AllTransactionsModal";
import { AddTransactionModal } from "./AddTransactionModal/AddTransactionModal";
import { useState } from "react";

interface IPortfolioCoinsTableProps extends TableProps {
  portfolioCoins: PortfolioCoin[] | null;
}

export const PortfolioCoinsTable = ({
  portfolioCoins,
  ...restProps
}: IPortfolioCoinsTableProps) => {
  const tableRowHoverBgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("brand.300", "brand.200");
  const coinSymbolColor = useColorModeValue("gray.400", "gray.500");
  const coinSymbolHoverColor = useColorModeValue("gray.500", "gray.400");
  const { filteredCoins } = useCoins();
  const {
    isOpen: addTransactionModalIsOpen,
    onOpen: onAddTransactionModalOpen,
    onClose: onAddTransactionModalClose,
  } = useDisclosure();
  const {
    isOpen: allTransactionsModalIsOpen,
    onOpen: onAllTransactionsModalOpen,
    onClose: onAllTransactionsModalClose,
  } = useDisclosure();
  const [modalType, setModalType] = useState("All Transactions");

  const userCoins =
    filteredCoins &&
    portfolioCoins &&
    filteredCoins?.filter((coin: Coin) =>
      portfolioCoins?.find((userCoin) => userCoin.coinId === coin.id.toString())
    );

  return (
    <>
      <Table
        display={["block", "block", "block", "table", "table"]}
        margin="0 auto 1rem auto"
        mt="2rem"
        overflowX="auto"
        fontSize={{ base: "sm", md: "md" }}
        {...restProps}
      >
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Logo</Th>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>24h</Th>
            <Th>Volume</Th>
            <Th>Market Cap</Th>
            <Th>Holdings</Th>
            <Tooltip label="Profit and Loss" hasArrow>
              <Th>PNL</Th>
            </Tooltip>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {userCoins?.map((coin: Coin) => {
            const { holdings } = portfolioCoins?.find(
              (userCoin) => userCoin.coinId === coin.id.toString()
            ) as PortfolioCoin;

            const userHoldingsInFiat = coin.quote.EUR.price * holdings;

            return (
              <>
                <Tr key={coin.id} _hover={{ bg: tableRowHoverBgColor }}>
                  <Td>{coin.cmcRank}</Td>
                  <Td>
                    {/* <Image
                  loader={() => coin.image}
                  src={coin.image}
                  alt={coin.name}
                  height="30px"
                  width="30px"
                  unoptimized
                /> */}
                  </Td>
                  <NextLink href={`/cryptocurrencies/${coin.slug}`} passHref>
                    <Td
                      cursor="pointer"
                      display="flex"
                      flexDir="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="0.2rem"
                      className="group"
                    >
                      <Text _groupHover={{ textColor: textColor }}>
                        {coin.name}
                      </Text>
                      <Text
                        textColor={coinSymbolColor}
                        _groupHover={{ textColor: coinSymbolHoverColor }}
                      >
                        {coin.symbol.toUpperCase()}
                      </Text>
                    </Td>
                  </NextLink>
                  <Td fontStyle="bold">
                    €
                    {coin.quote.EUR.price > 1
                      ? coin.quote.EUR.price.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      : coin.quote.EUR.price.toLocaleString(undefined, {
                          minimumFractionDigits: 6,
                          maximumFractionDigits: 6,
                        })}
                  </Td>
                  <Td
                    color={
                      coin.quote.EUR.percentChange24h > 0
                        ? "#60AD65"
                        : "#E53E3E"
                    }
                  >
                    {coin.quote.EUR.percentChange24h.toFixed(2)}%
                  </Td>
                  <Td>€{coin.quote.EUR.volume24h.toLocaleString()}</Td>
                  <Td>€{coin.quote.EUR.marketCap.toLocaleString()}</Td>
                  <Td display="flex" flexDir="column" gap="0.2rem">
                    <Text>
                      €
                      {userHoldingsInFiat &&
                        userHoldingsInFiat.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                    </Text>
                    <Flex gap="0.2rem">
                      <span>{holdings}</span>
                      <span>{coin.symbol.toUpperCase()}</span>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex flexDir="column">
                      <Text>+€240.67</Text>
                      <Text textColor="#60AD65">+5.29%</Text>
                    </Flex>
                  </Td>
                  <Td>
                    <Menu>
                      <MenuButton>
                        <Icon as={BsThreeDotsVertical} />
                      </MenuButton>
                      <MenuList>
                        <MenuItem
                          onClick={() => {
                            onAddTransactionModalOpen();
                          }}
                        >
                          Add Transaction
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            onAllTransactionsModalOpen();
                          }}
                        >
                          View All Transactions
                        </MenuItem>
                        <MenuItem>Details</MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
                {allTransactionsModalIsOpen && (
                  <AllTransactionsModal
                    coin={coin}
                    isOpen={allTransactionsModalIsOpen}
                    onClose={onAllTransactionsModalClose}
                  />
                )}
                {addTransactionModalIsOpen && (
                  <AddTransactionModal
                    coin={coin}
                    isOpen={addTransactionModalIsOpen}
                    onClose={onAddTransactionModalClose}
                  />
                )}
              </>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
};
