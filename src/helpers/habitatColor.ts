import { habitats } from "@/themes";

export function habitatColor({ habitat }: { habitat: string }) {
    switch (habitat) {
      case "urbano":
        return habitats.urbano;
      case "floresta":
        return habitats.floresta;
      case "litoral":
        return habitats.litoral;
      case "pântano":
        return habitats.pantano;
      case "deserto":
        return habitats.deserto;
      case "ilha":
        return habitats.ilha;
      case "costa":
        return habitats.costa;
      default:
        return habitats.default;
    }
}
