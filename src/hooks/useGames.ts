import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { type FetchResponse } from "@/services/api-client";
import useGameQueryStore from "@/store";
import type { Game } from "../entities/Game";

const apiCLient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiCLient.getAll({
        params: {
          search: gameQuery?.searchText,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery?.sortOrder,
          genres: gameQuery?.genreId,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
