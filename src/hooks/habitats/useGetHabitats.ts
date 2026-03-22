import { getHabitats } from "@/api/habitats/habitats";
import { useQuery } from "@tanstack/react-query";

export function useGetHabitats() {
  return useQuery({
    queryKey: ["habitats"],
    queryFn: () => getHabitats(),
  });
}
