import { habitats } from "@/themes/habitat";

export function habitatColor({ habitat }: { habitat: string }) {
    switch (habitat) {
      case "Urbano":
        return habitats.urbano;
      case "Floresta":
        return habitats.floresta;
      case "Litoral":
        return habitats.litoral;
      case "Pântano":
        return habitats.pantano;
      case "Deserto":
        return habitats.deserto;
      case "Ilha":
        return habitats.ilha;
      case "Costa":
        return habitats.costa;
      default:
        return habitats.default;
    }
}
