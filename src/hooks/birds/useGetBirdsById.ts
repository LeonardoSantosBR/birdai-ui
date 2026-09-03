import { getBirdsById } from "@/api/birds/birds";
import { useQuery } from "@tanstack/react-query";

export function useGetBirdsById(id: number) {
  return useQuery({
    queryKey: ["birdsById", id],
    queryFn: () => getBirdsById(id),
    staleTime: Infinity
  });
}
