import { postBirds } from "@/api/birds/birds";
import { IBirdForm } from "@/interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function usePostBirds() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (form: IBirdForm) => {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("cientific_name", form.cientific_name);
      formData.append("description", form.description);
      formData.append("habitats", JSON.stringify(form.birdsHabitats));

      // the file is only attached if the user has modified the image.
      if (form.url.startsWith("file://")) {
        const fileName = form.url.split("/").pop() ?? "image.jpg";
        const fileType = fileName.endsWith(".png") ? "image/png" : "image/jpeg";

        formData.append("file", {
          uri: form.url,
          name: fileName,
          type: fileType,
        } as any);
      }

      return postBirds(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["birds"] });
      queryClient.invalidateQueries({ queryKey: ["birdsById"] });
    },
  });
}