import { useMemo } from "react";
import useSWR from "swr";
import { coinsFetcher } from "../src/fetchers/coinsFetcher";
import { COINS_COINGECKO_API_URL } from "../constants/globals";
import { Coin } from "../types/coins";
import { useSearch } from "./useSearch";
import { COINS } from "../mock/coins";

export function useCoins() {
  // const { data, error } = useSWR(COINS_COINGECKO_API_URL, coinsFetcher);
  const { search, onChange } = useSearch();

  const filteredCoins = useMemo(
    () =>
      COINS?.filter((coin: Coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      ) as Coin[],
    [search]
  );

  // const isLoading = !error && !data;

  return {
    isLoading: false,
    isError: null,
    filteredCoins,
    search,
    onChange,
  };
}
