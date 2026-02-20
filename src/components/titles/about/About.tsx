
import GradientText from "@/components/gradientText/GradientText";
import { useIsFocused } from "@react-navigation/native";
import { MotiView } from "moti";

export default function AboutTitle(): React.JSX.Element {
  const focused = useIsFocused();

  return (
    <MotiView
      from={{ opacity: 0, translateX: -40 }}
      animate={
        focused
          ? { opacity: 1, translateX: 0 }
          : { opacity: 0, translateX: -40 }
      }
      transition={{
        type: "timing",
        duration: 500,
      }}
    >
      <GradientText text="Sobre Mim"/>
    </MotiView>
  );
}
