import { useQuery } from "@tanstack/react-query";
import platorms from "../data/platforms";
import APIClient from "@/services/api-client";
import type { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/list/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: {
      count: platorms.length,
      next: null,
      previous: null,
      results: platorms,
    },
  });

export default usePlatforms;
