import { api } from "../api";

export async function getHabitats() {
    const response = await api.get("habitats");
  return response.data;
}
