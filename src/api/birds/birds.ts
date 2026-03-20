import { api } from "../api";

export async function getBirds(
  page: number,
  limit: number,
  search?: string,
  habitatsSelected?: number[]
) {
  const response = await api.get("birds", {
    params: {
      page,
      limit,
      search,
      habitatsSelected: habitatsSelected?.join(","),
    },
  });
  return response.data;
}

export async function getBirdsById(id: number) {
  const response = await api.get(`birds/${id}`);
  return response.data;
}
