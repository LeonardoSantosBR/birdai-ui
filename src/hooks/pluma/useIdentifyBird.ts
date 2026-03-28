import { identifyBird } from "@/api/pluma/pluma";
import { useMutation } from "@tanstack/react-query";

export function useIdentifyBird() {
  return useMutation({
    mutationFn: (base64: string) => identifyBird(base64),
  });
}
