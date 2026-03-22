import { deleteBirdsById } from "@/api/birds/birds";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteBirdsById(id: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      return deleteBirdsById(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["birds"] });
      queryClient.invalidateQueries({ queryKey: ["birdsById"] });
    },
  });
}
