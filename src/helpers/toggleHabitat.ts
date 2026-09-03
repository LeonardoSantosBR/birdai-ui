import { IBirdForm } from "@/interfaces";

export const toggleHabitat = (
  setForm: React.Dispatch<React.SetStateAction<IBirdForm>>,
  habitatId: number
) => {
  setForm((prev) => {
    const already = prev.birdsHabitats.some((x) => x.habitat_id === habitatId);
    return {
      ...prev,
      birdsHabitats: already
        ? prev.birdsHabitats.filter((x) => x.habitat_id !== habitatId)
        : [...prev.birdsHabitats, { habitat_id: habitatId }],
    };
  });
};
