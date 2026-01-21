import { useUser } from "@supabase/auth-helpers-react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { useToast } from "@chakra-ui/react";
import { convertCamelCaseToSnakeCase } from "../utils";
import { useState } from "react";

export function useTransaction() {
  const [transactions, setTransactions] = useState([]);
  const toast = useToast();
  const { user } = useUser();

  const onAddCoinTransactionToPortfolio = async (
    transactionDate: string,
    coinId: string,
    amount: number,
    priceInUSD: number,
    priceInEUR: number,
    portfolioId: string
  ) => {
    try {
      if (!coinId || portfolioId || amount) {
        return null;
      }

      const defaultCoinState = {
        transactionDate,
        coinId,
        amount,
        priceInUSD,
        priceInEUR,
        portfolioId,
        userId: user?.id,
      };

      const payload = convertCamelCaseToSnakeCase(defaultCoinState);
      const { data: transactionsData, error } = await supabaseClient
        .from("transactions")
        .insert(payload);

      if (error) {
        throw new Error(error?.message);
      }

      const { data: allTransactions, error: allTransactionsError } =
        await supabaseClient
          .from("transactions")
          .select("*")
          .eq("portfolio_id", portfolioId)
          .eq("user_id", user?.id)
          .eq("coin_id", coinId);

      if (error) {
        throw new Error(allTransactionsError?.message);
      }

      setTransactions(allTransactions);

      return transactionsData;
    } catch (error) {
      if (error instanceof Error) {
        toast({
          position: "top",
          title: "Error!",
          description: error?.message,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    }
  };

  return {
    onAddCoinTransactionToPortfolio,
  };
}
