import { useQuery } from "@tanstack/react-query";
import genres from "@/data/genres";
import APIClient from "@/services/api-client";
import type { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: {
      count: genres.length,
      next: null,
      previous: null,
      results: genres,
    },
  });

export default useGenres;
