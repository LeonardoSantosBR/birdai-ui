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

export async function patchBirdsById(id: number, body: FormData) {
  return api.patch(`/birds/${id}`, body, {
    headers: { "Content-Type": "multipart/form-data" },
  });
}

export async function postBirds(body: FormData) {
  return api.post("birds", body, {
    headers: { "Content-Type": "multipart/form-data" },
  });
}

export async function deleteBirdsById(id: number) {
  const response = await api.delete(`birds/${id}`);
  return response.data;
}
