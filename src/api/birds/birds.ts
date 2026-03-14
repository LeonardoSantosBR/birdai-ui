import { api } from "../api";

export async function getBirds(page: number, limit: number) {
    const response = await api.get("birds", {
    params: { page, limit },
  });
  return response.data;
}
