import { api } from "../api";

export async function getBirds(page: number, limit: number, search?: string) {
    const response = await api.get("birds", {
    params: { page, limit, search },
  });
  return response.data;
}
