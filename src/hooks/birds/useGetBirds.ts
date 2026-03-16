import { getBirds } from "@/api/birds/birds";
import { useQuery } from "@tanstack/react-query";

export function useGetBirds(page: number, limit: number) {
  return useQuery({
    queryKey: ["birds", page, limit],
    queryFn: () => getBirds(page, limit),
  });
}