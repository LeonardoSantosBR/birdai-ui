import { getBirds } from "@/api/birds/birds";
import { useQuery } from "@tanstack/react-query";

export function useGetBirds(page: number, limit: number, search?: string) {
  return useQuery({
    queryKey: ["birds", page, limit, search],
    queryFn: () => getBirds(page, limit, search),
  });
}