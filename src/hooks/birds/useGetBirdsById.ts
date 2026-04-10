import { getBirdsById } from "@/api/birds/birds";
import { useQuery } from "@tanstack/react-query";

export function useGetBirdsById(id: number) {
  return useQuery({
    queryKey: ["birdsById"],
    queryFn: () => getBirdsById(id),
    staleTime: Infinity
  });
}
