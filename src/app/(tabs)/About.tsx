import { me } from "@/assets";
import { AboutTitle } from "@/components/titles";
import { t } from '@lingui/core/macro';
import { Image, Text, View } from "react-native";
import { aboutStylesheets } from "../(tabs)_stylesheets";

export default function About(): React.JSX.Element {
  const description = t`Sou um desenvolvedor full stack mobile júnior apaixonado por tecnologia e movido pela curiosidade de aprender cada vez mais. Além disso, tenho uma grande admiração e observação por pássaros, o que me inspirou a unir esse interesse pessoal com minha evolução profissional. Foi assim que surgiu o Birdai, um projeto criado com o objetivo de aprofundar meus conhecimentos em desenvolvimento mobile utilizando React Native e outras tecnologias como NestJs, PostgresSql, PrismaJs e etc.`;

  return (
    <View style={[aboutStylesheets.container]}>
      <AboutTitle />

      <View style={aboutStylesheets.imageContainer}>
        <View style={aboutStylesheets.imageArea}>
          <Image style={aboutStylesheets.image} source={me} />
        </View>
      </View>

      <View>
        <Text style={aboutStylesheets.description}>
          {description}
        </Text>
      </View>
    </View>
  );
}