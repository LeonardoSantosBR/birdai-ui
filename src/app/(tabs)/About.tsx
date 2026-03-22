import { me } from "@/assets";
import AboutTitle from "@/components/titles/About";
import { colors } from "@/themes";
import { Image, StyleSheet, Text, View } from "react-native";

export default function About(): React.JSX.Element {
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
          Sou um desenvolvedor full stack mobile júnior apaixonado por
          tecnologia e movido pela curiosidade de aprender cada vez mais. Além
          disso, tenho uma grande admiração e observação por pássaros, o que me
          inspirou a unir esse interesse pessoal com minha evolução
          profissional. Foi assim que surgiu o Birdai, um projeto criado com o
          objetivo de aprofundar meus conhecimentos em desenvolvimento mobile
          utilizando React Native e outras tecnologias como NestJs, PostgresSql,
          PrismaJs e etc.
        </Text>
      </View>
    </View>
  );
}

export const aboutStylesheets = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 15,
    backgroundColor: colors.aboutMe.background,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  imageArea: {
    width: 400,
    height: 400,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 12,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  description: {
    marginTop: 20,
    fontSize: 15,
    lineHeight: 20,
    color: colors.aboutMe.descriptionColor,
  },
});
