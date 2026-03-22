import { getBirds } from "@/api/birds/birds";
import { useQuery } from "@tanstack/react-query";

export function useGetBirds(page: number, limit: number, search?: string, habitatsSelected?: number[]) {
  return useQuery({
    queryKey: ["birds", page, limit, search, habitatsSelected],
    queryFn: () => getBirds(page, limit, search, habitatsSelected),
  });
}